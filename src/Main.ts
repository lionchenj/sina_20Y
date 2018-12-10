import GameConfig from "./GameConfig";
import Screen1BackGround from "./Screen1BackGround";
import Football from "./Football";
import Basketball from "./basketball";
import running from "./running";
import swimming from "./swimming";
import page3run from "./page3_runman";
import { getFootballX } from "./FootballPath";
import { QuestionDialog } from "./QuestionDialog";
import Constants from "./Constants";
import { QuestionData, QuestionItem, QuestionShowY } from "./QuestionData";
import LoadingDialog from "./LoadingDialog";
import ShakeDialog from "./ShakeDialog";
import ScrollDialog, { TipType } from "./ScrollDialog";
class Main {
	private football: Football
	private basketball: Basketball
	private running: running
	private swimming: swimming
	private page3run: page3run
	private y = 0;
	

	private screen1BackGround: Screen1BackGround
	private dragRegion: Laya.Rectangle

	private shakeCount: number = 0;
	private hasPlayShotAni = false


	private console: Laya.Text;


	private showQuestionIndexList = new Array<number>()	// 已经显示的问题index列表
	private showingDialog = false


	private loadingDialog: LoadingDialog	// 显示加载进度条
	private shakeDialog: ShakeDialog		// 显示摇一摇提示
	private bgmSoundChannel: Laya.SoundChannel


	constructor() {
		// warning: 第三个参数不要使用WebGL，当背景太长的时候在iPhone上会有非常严重的锯齿
		Laya.init(Constants.stageWidth, Constants.stateHeight, Laya[""]);

		Laya["Physics"] && Laya["Physics"].enable();
		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
		Laya.stage.scaleMode = Constants.scaleMode;
		Laya.stage.screenMode = Constants.screenMode;
		//兼容微信不支持加载scene后缀场景
		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
		if (GameConfig.stat) Laya.Stat.show();
		Laya.alertGlobalError = true;

		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);


		UIConfig.closeDialogOnSide = false
		UIConfig.popupBgColor = "#000000"
		UIConfig.popupBgAlpha = 0.8
		UIConfig.closeDialogOnSide = false


		Laya.stage.bgColor = "white"



		this.loadProgessAssets()

		// 需要显示调试信息可以打开这里
		this.showConsoleText(false);



	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		// GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}

	loadProgessAssets(): void {
		Laya.loader.load(["res/atlas/comp.atlas"], Laya.Handler.create(this, this.onProgressAssetsLoaded))
	}

	loadOtherAssets(): void {
		const assets: Array<any> = []
		assets.push({
			url: Constants.background1,
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: Constants.background2,
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: Constants.background3,
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: Constants.background4,
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: Constants.background5,
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: "res/atlas/sports.atlas",
			type: Laya.Loader.ATLAS
		})
		assets.push({
			url: Constants.sound0,
			type: Laya.Loader.SOUND
		})
		assets.push({
			url: Constants.sound1,
			type: Laya.Loader.SOUND
		})
		assets.push({
			url: Constants.sound2,
			type: Laya.Loader.SOUND
		})
		assets.push({
			url: Constants.sound3,
			type: Laya.Loader.SOUND
		})
		assets.push({
			url: Constants.sound4,
			type: Laya.Loader.SOUND
		})

		assets.push({
			url: Constants.soundBgm,
			type: Laya.Loader.SOUND
		})


		// 预加载资源
		Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false))
		Laya.loader.on(Laya.Event.ERROR, this, this.onError)
	}

	// 必需先加载进度条资源才能显示进度条
	onProgressAssetsLoaded(): void {
		// 显示进度条

		this.loadingDialog = new LoadingDialog()
		this.loadingDialog.popup()
		this.loadOtherAssets()
	}

	onAssetsLoading(progress: number): void {
		console.log("加载进度: " + progress);
		this.loadingDialog.changeProgressValue(progress)
	}

	onAssetsLoaded(): void {
		this.loadingDialog.close()
		this.console.text += '资源加载完成。';

		this.showTipDialog("scroll")

		this.screen1BackGround = new Screen1BackGround()
		Laya.stage.addChild(this.screen1BackGround)
		this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove)
		this.screen1BackGround.on(Laya.Event.DRAG_START, this, this.onBackgroundStartMove)

		this.football = new Football()
		this.football.pos(327, 233)	// 初始位置
		Laya.stage.addChild(this.football)
		this.basketball = new Basketball()
		this.basketball.pos(300, 500)	// 初始位置
		Laya.stage.addChild(this.basketball)
		this.running = new running()
		this.running.pos(250, 200)	// 初始位置
		Laya.stage.addChild(this.running)
		this.swimming = new swimming()
		this.swimming.pos(256,300)	// 初始位置
		Laya.stage.addChild(this.swimming)
		this.page3run = new page3run()
        this.page3run.pos(300, 500) // 初始位置
        Laya.stage.addChild(this.page3run)
		console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight)

		// 计算背景可拖动区域
		const moableHeight = Laya.stage.height - Laya.Browser.clientHeight
		this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight)

		// Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag)

		// 播放背景音乐
		// this.bgmSoundChannel =  Laya.SoundManager.playMusic(Constants.soundBgm, 0)
	}

	onError(err: string): void {
		console.log("加载失败: " + err);
		this.loadingDialog.updateTip("加载失败: " + err)
	}

	onMouseMove(): void {
		// 始终保持主角和鼠标位置一致
		// this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
		// console.log("onMouseMove", Laya.stage.mouseX, Laya.stage.mouseY)
		// console.log(`map[${this.screen1BackGround.y}] = ${Laya.stage.mouseX}`)
		this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
	}

	onStartDrag(): void {
		console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY)
		if (this.showingDialog) {
			return
		}

		this.screen1BackGround.startDrag(this.dragRegion, false, 0)
	}

	onBackgroundStartMove(): void {
		// TODO: 这里同样要做一些能否拖动的判断，onBackgroundMove部分逻辑也适应于此方法
	}



	onBackgroundMove(): void {
		console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y)

		// 显示问题
		const needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y)
		if (needShowQuestion) {
			this.screen1BackGround.stopDrag()
			return
		}

		// TODO: 根据实际情况显示点击提示
		// this.showTipDialog("click_white")
		// this.showTipDialog("click_black")


		// if (this.screen1BackGround.y <= -1100) {	// 不给拖动，摇一摇显示射门动画
		// 	if (this.hasPlayShotAni) {
		// 		this.console.text += '已经显示过射门动画\n';
		// 	} else {
		// 		this.console.text += '没有显示过射门动画\n';
		// 		this.screen1BackGround.stopDrag()
		// 		// 显示过摇一摇提示
		// 		this.showShakeDialog()
		// 	}
		// }
		// if (this.screen1BackGround.y <= -5289) {
		// 		this.showTipDialog("click_black");
		// 		this.screen1BackGround.stopDrag()
		// 		return 
		// }

		if (this.screen1BackGround.y <= -800) { // 隐藏足球
			this.football.hide()
		} else {
			this.football.show()
			// 移动足球位置
			// const y = -this.screen1BackGround.y + 232
			let y: number = 0;
			if ((-this.screen1BackGround.y + 232) < 1032) {
				y = -this.screen1BackGround.y + 100;
			}
			if ((-this.screen1BackGround.y + 232) < 850) {
				y = -this.screen1BackGround.y + 130;
			}
			if ((-this.screen1BackGround.y + 232) < 730) {
				y = -this.screen1BackGround.y + 150;
			}
			if ((-this.screen1BackGround.y + 232) < 580) {
				y = -this.screen1BackGround.y + 180;
			}
			if ((-this.screen1BackGround.y + 232) < 435) {
				y = -this.screen1BackGround.y + 200;
			}
			if ((-this.screen1BackGround.y + 232) > 1032) {
				y = -this.screen1BackGround.y + 232;
			}
			const x = getFootballX(y)
			if (x == 0) {
				this.football.y = y
			} else {
				this.football.pos(x, y)
			}
			// 判断足球是否需要旋转
			if (this.screen1BackGround.y <= -585) {
				this.football.stopRotate()
			} else {
				this.football.playRotate()
			}
		}
		// 判断是否需要播放cup ani
		if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
			if (!this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.playAni("cup")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.stopAni("cup")
			}
		}

		// 判断是否需要播放口哨动画
		if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
			if (!this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.playAni("whistle")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.stopAni("whistle")
			}
		}
		if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
			if (!this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.playAni("whistle")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.stopAni("whistle")
			}
		}
		if (this.screen1BackGround.y <= -2125 && this.screen1BackGround.y >= -2325) {
			if (!this.screen1BackGround.isAniPlaying("text2002")) {
				this.screen1BackGround.playAni("text2002")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2002")) {
				this.screen1BackGround.stopAni("text2002")
			}
		}
		if (this.screen1BackGround.y <= -300 && this.screen1BackGround.y >= -450) {
			if (!this.screen1BackGround.isAniPlaying("shot")) {
				this.screen1BackGround.playAni("shot")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("shot")) {
				this.screen1BackGround.stopAni("shot")
			}
		}

		if (this.screen1BackGround.y <= -2455 && this.screen1BackGround.y >= -2600) {
			if (!this.screen1BackGround.isAniPlaying("win")) {
				this.screen1BackGround.playAni("win")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("win")) {
				this.screen1BackGround.stopAni("win")
			}
		}

		const y = -this.screen1BackGround.y + 232;
		//page2
		if (this.screen1BackGround.y <= -3490 && this.screen1BackGround.y >= -3515) {
			if (!this.screen1BackGround.isAniPlaying("page02Start")) {
				this.screen1BackGround.playAni("page02Start")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("page02Start")) {
				this.screen1BackGround.stopAni("page02Start")
			}
		}
		if (this.screen1BackGround.y <= -3515 && this.screen1BackGround.y >= -4415) {
			this.running.show();
			let z = parseInt((-this.screen1BackGround.y - 3515)/10+'');
			console.log('z: '+z)
			if(z%10 == 0){
				this.y = z; 
			};
			console.log('y: '+this.y)
			this.running.goPath(z-0)
		}else{
			this.y = 0;
			this.running.goPath(81)
			this.running.hide();
		}
		if (this.screen1BackGround.y <= -3700 && this.screen1BackGround.y >= -4000) {
			if (!this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.playAni("dumbbell")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.stopAni("dumbbell")
			}
		}

		if (this.screen1BackGround.y <= -4000 && this.screen1BackGround.y >= -4150) {
			if (!this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.playAni("equipment")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.stopAni("equipment")
			}
		}
		if (this.screen1BackGround.y <= -4200 && this.screen1BackGround.y >= -4350) {
			if (!this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.playAni("clock")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.stopAni("clock")
			}
		}
		if (this.screen1BackGround.y <= -4610 && this.screen1BackGround.y >= -4760) {
			if (!this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.playAni("text2004")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.stopAni("text2004")
			}
		}
		if (this.screen1BackGround.y <= -4800 && this.screen1BackGround.y >= -5000) {
			if (!this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.playAni("electricman")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.stopAni("electricman")
			}
		}
		if (this.screen1BackGround.y <= -5300 && this.screen1BackGround.y >= -6000) {
			if (!this.screen1BackGround.isAniPlaying("liuxiang")) {
				this.screen1BackGround.playAni("liuxiang")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("liuxiang")) {
				this.screen1BackGround.stopAni("liuxiang")
			}
		}


		//page3
		if (this.screen1BackGround.y <= -6300 && this.screen1BackGround.y >= -6900) {
            this.page3run.show();
            let z = parseInt((-this.screen1BackGround.y - 6300)/10+'');
            console.log('z: '+z)
            if(z%10 == 0){
                this.y = z; 
            };
            console.log('y: '+this.y)
            this.page3run.goPath(z-0);      
        }else{
            this.y = 0;
            this.page3run.hide();   
        }
		if (this.screen1BackGround.y <= -6498 && this.screen1BackGround.y >= -6598) {
			this.screen1BackGround.playAni("running")
		}
		if (this.screen1BackGround.y <= -6725 && this.screen1BackGround.y >= -6825) {
			this.screen1BackGround.playAni("running2")
		}
		if (this.screen1BackGround.y <= -6010 && this.screen1BackGround.y >= -6380) {
			if (!this.screen1BackGround.isAniPlaying("computer")) {
				this.screen1BackGround.playAni("computer")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("computer")) {
				this.screen1BackGround.stopAni("computer")
			}
		}
		if (this.screen1BackGround.y <= -6575 && this.screen1BackGround.y >= -6700) {
			if (!this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.playAni("medal")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.stopAni("medal")
			}
		}
		if (this.screen1BackGround.y <= -6824 && this.screen1BackGround.y >= -7000) {
			if (!this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.playAni("stage")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.stopAni("stage")
			}
		}
		if (this.screen1BackGround.y <= -7426 && this.screen1BackGround.y >= -7600) {
			if (!this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.playAni("text2008")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.stopAni("text2008")
			}
		}

		if (this.screen1BackGround.y <= -7722 && this.screen1BackGround.y >= -8000) {
			if (!this.screen1BackGround.isAniPlaying("crowd")) {
				this.screen1BackGround.playAni("crowd")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("crowd")) {
				this.screen1BackGround.stopAni("crowd")
			}
		}

		//page4
		if (this.screen1BackGround.y <= -8100 && this.screen1BackGround.y >= -8360) {
			if (!this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.playAni("heart")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.stopAni("heart")
			}
		}
		
		if (this.screen1BackGround.y <= -8270 && this.screen1BackGround.y >= -10120) {
			this.swimming.show();
			let z = parseInt((-this.screen1BackGround.y - 8270)/10+'');
			console.log('z: '+z)
			if(z%10 == 0){
				this.y = z; 
			};
			console.log('y: '+this.y)
			this.swimming.goPath(z-0)
		}else{
			this.y = 0;
			this.swimming.hide();
		}
		if (this.screen1BackGround.y <= -8360 && this.screen1BackGround.y >= -8500) {
			if (!this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.playAni("text2012")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.stopAni("text2012")
			}
		}
		if (this.screen1BackGround.y <= -8677 && this.screen1BackGround.y >= -8800) {
			if (!this.screen1BackGround.isAniPlaying("waterRight")) {
				this.screen1BackGround.playAni("waterRight")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("waterRight")) {
				this.screen1BackGround.stopAni("waterRight")
			}
		}
		if (this.screen1BackGround.y <= -8685 && this.screen1BackGround.y >= -8800) {
			if (!this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.playAni("board")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.stopAni("board")
			}
		}
		if (this.screen1BackGround.y <= -8930 && this.screen1BackGround.y >= -9100) {
			if (!this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.playAni("wall")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.stopAni("wall")
			}
		}
		if (this.screen1BackGround.y <= -9280 && this.screen1BackGround.y >= -9400) {
			if (!this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.playAni("goggles")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.stopAni("goggles")
			}
		}
		if (this.screen1BackGround.y <= -9657 && this.screen1BackGround.y >= -9800) {
			if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.playAni("waterLeft")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.stopAni("waterLeft")
			}
		}
		if (this.screen1BackGround.y <= -10000 && this.screen1BackGround.y >= -10100) {
			if (!this.screen1BackGround.isAniPlaying("winMan")) {
				this.screen1BackGround.playAni("winMan")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("winMan")) {
				this.screen1BackGround.stopAni("winMan")
			}
		}

		//page5
		if (this.screen1BackGround.y <= -11050 && this.screen1BackGround.y >= -11650) {
			this.basketball.show();
			let z = parseInt((-this.screen1BackGround.y - 11050)/10+'');
			console.log('z: '+z)
			if(z%10 == 0){
				this.y = z; 
			};
			console.log('y: '+this.y)
			this.basketball.goPath(z-0);		
		}else{
			this.y = 0;
			this.basketball.hide();	
		}
		if (this.screen1BackGround.y <= -10536 && this.screen1BackGround.y >= -10748) {
			if (!this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.playAni("ball")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.stopAni("ball")
			}
		}
		if (this.screen1BackGround.y <= -10536 && this.screen1BackGround.y >= -10748) {
			if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.playAni("scoreboard")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.stopAni("scoreboard")
			}
		}
		if (this.screen1BackGround.y <= -11127 && this.screen1BackGround.y >= -11300) {
			if (!this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.playAni("shoes")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.stopAni("shoes")
			}
		}

		if (this.screen1BackGround.y <= -11411 && this.screen1BackGround.y >= -11560) {
			if (!this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.playAni("hat")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.stopAni("hat")
			}
		}
		if (this.screen1BackGround.y <= -11868 && this.screen1BackGround.y >= -11969) {
			if (!this.screen1BackGround.isAniPlaying("ballMan")) {
				this.screen1BackGround.playAni("ballMan")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("ballMan")) {
				this.screen1BackGround.stopAni("ballMan")
			}
		}


	}

	onDeviceShake(): void {
		if (this.shakeDialog) {
			this.shakeDialog.close()
			this.showingDialog = false
			this.shakeDialog = null
		}
		this.shakeCount++
		this.console.text += "设备摇晃了" + this.shakeCount + "次\n";
		if (this.shakeCount >= 3) {
			Laya.Shake.instance.stop()
			this.shakeCount = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni) {
				return
			}
			this.screen1BackGround.playAni("shot")

			this.hasPlayShotAni = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound0)
			// this.playSound(Constants.sound1)
			// this.playSound(Constants.sound2)
			// this.playSound(Constants.sound3)
			// this.playSound(Constants.sound4)

		}
	}

	onQuestionDialogClose(index: string, type: string): void {
		console.log("onQuestionDialogClose", type, index)
		const right = (type === "true") // TODO: 计分

		this.showingDialog = false
	}

	// 判断是否需要显示问题
	private showQuestionDialogIfNeed(y: number): boolean {
		const offset = Laya.Browser.clientHeight
		const hasShowLength = this.showQuestionIndexList.length
		// if (length >= 10) {
		if (y) {
			return false
		}
		if (y > offset - QuestionShowY[hasShowLength]) {
			return false
		}
		const isOdd = !(hasShowLength % 2)
		if (isOdd) { // 随机
			const random = this.getRandomQuestionIndex()
			this.showQuestion(random)
		} else {	// 取前5位
			const index = Math.floor(hasShowLength / 2)
			this.showQuestion(index)
		}
		return true
	}

	private getRandomQuestionIndex(): number {
		const max = QuestionData.length - 5
		const random = Math.round((Math.random() * max)) + 5
		if (this.showQuestionIndexList.indexOf(random) == -1) {
			return random
		} else { // 已经显示过重新获取
			return this.getRandomQuestionIndex()
		}
	}

	private showQuestion(index: number): void {
		if (index >= QuestionData.length) {
			return
		}
		this.showingDialog = true
		this.showQuestionIndexList.push(index)
		const questionData = QuestionData[index]
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		const questionDialog = new QuestionDialog(questionData)
		questionDialog.popup(true)
		questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index])
	}

	private showShakeDialog(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog = new ShakeDialog()
		this.shakeDialog.popup()

		// 监听摇一摇

		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake)
		this.console.text += '开始接收设备摇动\n';

	}


	private showTipDialog(tipType: TipType): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = true
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		const scrollDialog = new ScrollDialog(tipType)

		scrollDialog.popup(true)
		scrollDialog.closeHandler = Laya.Handler.create(this, this.onTipDialogClose)
	}

	private onTipDialogClose() {
		this.showingDialog = false
	}

	private playSound(url: string) {
		this.bgmSoundChannel.pause()
		Laya.SoundManager.playSound(url, 1, Laya.Handler.create(this, this.onSoundCompete))
	}

	private onSoundCompete() {
		this.bgmSoundChannel.resume()
	}

	private showConsoleText(visible: boolean): void {
		this.console = new Laya.Text();
		Laya.stage.addChild(this.console);
		this.console.zOrder = 10001
		this.console.y = 10;
		this.console.width = Laya.stage.width;
		this.console.height = 200;
		this.console.color = "#FFFFFF";
		this.console.fontSize = 20;
		this.console.leading = 10;
		this.console.bgColor = "#000000"
		this.console.visible = visible

	}

}
//激活启动类
new Main();
