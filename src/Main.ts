import GameConfig from "./GameConfig";
import Screen1BackGround from "./Screen1BackGround";
import Football from "./Football";
import Basketball from "./basketball";
import running from "./running";
import swimming from "./swimming";
import page3run from "./page3_runman";
import page1e2s from "./page1&2";
import page2e3s from "./page2&3";
import page3e4s from "./page3&4";
import page4e5s from "./page4&5";
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
	private page1e2s: page1e2s
	private page2e3s: page2e3s
	private page3e4s: page3e4s
	private page4e5s: page4e5s
	private y = 0;


	private screen1BackGround: Screen1BackGround
	private dragRegion: Laya.Rectangle

	private shakeCount: number = 0;
	private shakeCount2: number = 0;
	private shakeCount3: number = 0;
	private shakeCount4: number = 0;
	private shakeCount5: number = 0;
	private hasPlayShotAni = false;
	private hasPlayShotAni2 = false;
	private hasPlayShotAni3 = false;
	private hasPlayShotAni4 = false;
	private hasPlayShotAni5 = false;


	private console: Laya.Text;


	private showQuestionIndexList = new Array<number>()	// 已经显示的问题index列表
	private showingDialog = false


	private loadingDialog: LoadingDialog	// 显示加载进度条
	private shakeDialog: ShakeDialog		// 显示摇一摇提示
	private shakeDialog2: ShakeDialog		// 显示摇一摇提示
	private shakeDialog3: ShakeDialog		// 显示摇一摇提示
	private shakeDialog4: ShakeDialog		// 显示摇一摇提示
	private shakeDialog5: ShakeDialog		// 显示摇一摇提示
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
		this.swimming.pos(256, 500)	// 初始位置
		Laya.stage.addChild(this.swimming)
		this.page3run = new page3run()
		this.page3run.pos(300, 850) // 初始位置
		Laya.stage.addChild(this.page3run)
		this.page1e2s = new page1e2s()
		this.page1e2s.pos(250, 500) // 初始位置
		Laya.stage.addChild(this.page1e2s)
		this.page2e3s = new page2e3s()
		this.page2e3s.pos(250, 500) // 初始位置
		Laya.stage.addChild(this.page2e3s)
		this.page3e4s = new page3e4s()
		this.page3e4s.pos(270, 700) // 初始位置
		Laya.stage.addChild(this.page3e4s)
		this.page4e5s = new page4e5s()
		this.page4e5s.pos(250, 700) // 初始位置
		Laya.stage.addChild(this.page4e5s)
		console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight)

		// 计算背景可拖动区域
		const moableHeight = Laya.stage.height - Laya.Browser.clientHeight
		this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight)

		// Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag)

		// 播放背景音乐
		// this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants.soundBgm, 0)
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


		if (this.screen1BackGround.y <= -1300) {	// 不给拖动，摇一摇显示射门动画
			if (this.hasPlayShotAni) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag()
				// 显示过摇一摇提示
				this.showShakeDialog()
			}
		}
		if (this.screen1BackGround.y <= -6320) {
			if (this.hasPlayShotAni2) {
				this.console.text += '已经显示过2动画\n';
			} else {
				this.console.text += '没有显示过2动画\n';
				this.screen1BackGround.stopDrag()
				// 显示过摇一摇提示
				this.showShakeDialog2()
			}
		}
		if (this.screen1BackGround.y <= -9400) {
			if (this.hasPlayShotAni3) {
				this.console.text += '已经显示过3动画\n';
			} else {
				this.console.text += '没有显示过3动画\n';
				this.screen1BackGround.stopDrag()
				// 显示过摇一摇提示
				this.showShakeDialog3()
			}
		}
		if (this.screen1BackGround.y <= -12930) {
			if (this.hasPlayShotAni4) {
				this.console.text += '已经显示过4动画\n';
			} else {
				this.console.text += '没有显示过4动画\n';
				this.screen1BackGround.stopDrag()
				// 显示过摇一摇提示
				this.showShakeDialog4()
			}
		}
		if (this.screen1BackGround.y <= -15830) {
			if (this.hasPlayShotAni5) {
				this.console.text += '已经显示过5动画\n';
			} else {
				this.console.text += '没有显示过5动画\n';
				this.screen1BackGround.stopDrag()
				// 显示过摇一摇提示
				this.showShakeDialog5()
			}
		}

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

		if (this.screen1BackGround.y <= -1730 && this.screen1BackGround.y >= -2645) {
			if (!this.screen1BackGround.isAniPlaying("win")) {
				this.screen1BackGround.playAni("win")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("win")) {
				this.screen1BackGround.stopAni("win")
			}
		}

		const y = -this.screen1BackGround.y + 232;
		if (this.screen1BackGround.y <= -2630 && this.screen1BackGround.y >= -4600) {
			this.page1e2s.show();
			let z = parseInt((-this.screen1BackGround.y - 2630) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.page1e2s.goPath(z - 0)
		} else {
			this.y = 0;
			this.page1e2s.goPath(90)
			this.page1e2s.hide();
		}
		//page2
		if (this.screen1BackGround.y <= -4530 && this.screen1BackGround.y >= -5430) {
			this.running.show();
			let z = parseInt((-this.screen1BackGround.y - 4530) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.running.goPath(z - 0)
		} else {
			this.y = 0;
			this.running.goPath(81)
			this.running.hide();
		}
		if (this.screen1BackGround.y <= -4522 && this.screen1BackGround.y >= -4621) {
			if (!this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.playAni("dumbbell")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.stopAni("dumbbell")
			}
		}

		if (this.screen1BackGround.y <= -4957 && this.screen1BackGround.y >= -5010) {
			if (!this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.playAni("equipment")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.stopAni("equipment")
			}
		}
		if (this.screen1BackGround.y <= -5190 && this.screen1BackGround.y >= -5268) {
			if (!this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.playAni("clock")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.stopAni("clock")
			}
		}
		if (this.screen1BackGround.y <= -5454 && this.screen1BackGround.y >= -5603) {
			if (!this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.playAni("text2004")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.stopAni("text2004")
			}
		}
		if (this.screen1BackGround.y <= -5725 && this.screen1BackGround.y >= -5866) {
			if (!this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.playAni("electricman")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.stopAni("electricman")
			}
		}
		if (this.screen1BackGround.y <= -6330 && this.screen1BackGround.y >= -8100) {
			this.page2e3s.show();
			let z = parseInt((-this.screen1BackGround.y - 6330) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.page2e3s.goPath(z - 0)
		} else {
			this.y = 0;
			this.page2e3s.goPath(90)
			this.page2e3s.hide();
		}

		//page3
		if (this.screen1BackGround.y <= -8200 && this.screen1BackGround.y >= -8950) {
			this.page3run.show();
			let z = parseInt((-this.screen1BackGround.y - 8200) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.page3run.goPath(z - 0);
		} else {
			this.y = 0;
			this.page3run.hide();
		}
		if (this.screen1BackGround.y <= -8348 && this.screen1BackGround.y >= -8415) {
			if (!this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.playAni("medal")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.stopAni("medal")
			}
		}
		if (this.screen1BackGround.y <= -8625 && this.screen1BackGround.y >= -8723) {
			if (!this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.playAni("stage")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.stopAni("stage")
			}
		}
		if (this.screen1BackGround.y <= -9131 && this.screen1BackGround.y >= -9191) {
			if (!this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.playAni("text2008")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.stopAni("text2008")
			}
		}
		if (this.screen1BackGround.y <= -9420 && this.screen1BackGround.y >= -11160) {
			this.page3e4s.show();
			let z = parseInt((-this.screen1BackGround.y - 9420) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.page3e4s.goPath(z - 0)
		} else {
			this.y = 0;
			this.page3e4s.goPath(90)
			this.page3e4s.hide();
		}

		//page4
		if (this.screen1BackGround.y <= -11160 && this.screen1BackGround.y >= -11160) {
			if (!this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.playAni("heart")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.stopAni("heart")
			}
		}

		if (this.screen1BackGround.y <= -11030 && this.screen1BackGround.y >= -12880) {
			this.swimming.show();
			let z = parseInt((-this.screen1BackGround.y - 11030) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.swimming.goPath(z - 0)
		} else {
			this.y = 0;
			this.swimming.hide();
		}
		if (this.screen1BackGround.y <= -11162 && this.screen1BackGround.y >= -11233) {
			if (!this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.playAni("text2012")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.stopAni("text2012")
			}
		}
		if (this.screen1BackGround.y <= -11376 && this.screen1BackGround.y >= -11449) {
			if (!this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.playAni("board")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.stopAni("board")
			}
		}
		if (this.screen1BackGround.y <= -11743 && this.screen1BackGround.y >= -11807) {
			if (!this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.playAni("wall")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.stopAni("wall")
			}
		}
		if (this.screen1BackGround.y <= -12066 && this.screen1BackGround.y >= -12126) {
			if (!this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.playAni("goggles")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.stopAni("goggles")
			}
		}
		if (this.screen1BackGround.y <= -12405 && this.screen1BackGround.y >= -12518) {
			if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.playAni("waterLeft")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.stopAni("waterLeft")
			}
		}
		if (this.screen1BackGround.y <= -12960 && this.screen1BackGround.y >= -14820) {
			this.page4e5s.show();
			let z = parseInt((-this.screen1BackGround.y - 12830) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.page4e5s.goPath(z - 0)
		} else {
			this.y = 0;
			this.page4e5s.goPath(90)
			this.page4e5s.hide();
		}

		//page5
		if (this.screen1BackGround.y <= -14930 && this.screen1BackGround.y >= -15530) {
			this.basketball.show();
			let z = parseInt((-this.screen1BackGround.y - 14930) / 10 + '');
			console.log('z: ' + z)
			if (z % 10 == 0) {
				this.y = z;
			};
			console.log('y: ' + this.y)
			this.basketball.goPath(z - 0);
		} else {
			this.y = 0;
			this.basketball.hide();
		}
		if (this.screen1BackGround.y <= -14470 && this.screen1BackGround.y >= -14562) {
			if (!this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.playAni("ball")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.stopAni("ball")
			}
		}
		if (this.screen1BackGround.y <= -14470 && this.screen1BackGround.y >= -14562) {
			if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.playAni("scoreboard")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.stopAni("scoreboard")
			}
		}
		if (this.screen1BackGround.y <= -15082 && this.screen1BackGround.y >= -15149) {
			if (!this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.playAni("shoes")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.stopAni("shoes")
			}
		}

		if (this.screen1BackGround.y <= -15415 && this.screen1BackGround.y >= -15496) {
			if (!this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.playAni("hat")
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.stopAni("hat")
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
		}
	}
	onDeviceShake2(): void {
		if (this.shakeDialog2) {
			this.shakeDialog2.close()
			this.showingDialog = false
			this.shakeDialog2 = null
		}
		this.shakeCount2++
		this.console.text += "设备摇晃了" + this.shakeCount2 + "次\n";
		if (this.shakeCount2 >= 3) {
			Laya.Shake.instance.stop()
			this.shakeCount2 = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni2) {
				return
			}
			this.screen1BackGround.playAni("liuxiang")

			this.hasPlayShotAni2 = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound1)
		}
	}
	onDeviceShake3(): void {
		if (this.shakeDialog3) {
			this.shakeDialog3.close()
			this.showingDialog = false
			this.shakeDialog3 = null
		}
		this.shakeCount3++
		this.console.text += "设备摇晃了" + this.shakeCount3 + "次\n";
		if (this.shakeCount3 >= 3) {
			Laya.Shake.instance.stop()
			this.shakeCount3 = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni3) {
				return
			}
			this.screen1BackGround.playAni("crowd")

			this.hasPlayShotAni3 = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound2)
		}
	}
	onDeviceShake4(): void {
		if (this.shakeDialog4) {
			this.shakeDialog4.close()
			this.showingDialog = false
			this.shakeDialog4 = null
		}
		this.shakeCount4++
		this.console.text += "设备摇晃了" + this.shakeCount4 + "次\n";
		if (this.shakeCount4 >= 3) {
			Laya.Shake.instance.stop()
			this.shakeCount4 = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni4) {
				return
			}
			this.screen1BackGround.playAni("winMan")

			this.hasPlayShotAni4 = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound3)
		}
	}
	onDeviceShake5(): void {
		if (this.shakeDialog5) {
			this.shakeDialog5.close()
			this.showingDialog = false
			this.shakeDialog5 = null
		}
		this.shakeCount5++
		this.console.text += "设备摇晃了" + this.shakeCount5 + "次\n";
		if (this.shakeCount5 >= 3) {
			Laya.Shake.instance.stop()
			this.shakeCount5 = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni5) {
				return
			}
			this.screen1BackGround.playAni("ballMan")

			this.hasPlayShotAni5 = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound4)
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
		if (hasShowLength >= 10) {
			// if (y) {
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
		questionDialog.popup(true, false)
		questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index])
	}

	private showShakeDialog(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog = new ShakeDialog()
		this.shakeDialog.popup(true, false)
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake)
		this.console.text += '开始接收设备摇动\n';
	}
	private showShakeDialog2(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog2 = new ShakeDialog()
		this.shakeDialog2.popup(true, false)
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake2)
		this.console.text += '开始接收设备摇动\n';
	} private showShakeDialog3(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog3 = new ShakeDialog()
		this.shakeDialog3.popup(true, false)
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake3)
		this.console.text += '开始接收设备摇动\n';
	} private showShakeDialog4(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog4 = new ShakeDialog()
		this.shakeDialog4.popup(true, false)
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake4)
		this.console.text += '开始接收设备摇动\n';
	} private showShakeDialog5(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog5 = new ShakeDialog()
		this.shakeDialog5.popup(true, false)
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500)
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake5)
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
