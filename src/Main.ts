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
import ScoreResultDialog from "./ScoreResultDialog";
let ismusic = true;
class Main {
	private firstSt: number = 0
	private firstnum: number = 0
	private ballY: number = 0
	private football: Football
	private basketball: Basketball
	private running: running
	private swimming: swimming
	private page3run: page3run


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
	private isPlaySound4 = true;

	private console: Laya.Text;

    private musicAni: Laya.Animation;
	private downIcon: Laya.Animation
	private showQuestionIndexList = new Array<number>()	// 已经显示的问题index列表
	private showingDialog = false

	private loadingDialog: LoadingDialog	// 显示加载进度条
	private shakeDialog: ShakeDialog		// 显示摇一摇提示
	private shakeDialog2: ShakeDialog		// 显示摇一摇提示
	private shakeDialog3: ShakeDialog		// 显示摇一摇提示
	private shakeDialog4: ShakeDialog		// 显示摇一摇提示
	private shakeDialog5: ShakeDialog		// 显示摇一摇提示
	private bgmSoundChannel: Laya.SoundChannel

	private questionScore: number 			// 回答问题的分数
	private isLongClick: boolean 			// 检测是否长按的参数


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

		this.questionScore = 0

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
			url: Constants.loading,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background0,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background1,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background2,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background3,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background4,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: Constants.background5,
			type: Laya.Loader.IMAGE
		});
		assets.push({
			url: "res/atlas/sports.atlas",
			type: Laya.Loader.ATLAS
		});
		assets.push({
			url: "res/atlas/view.atlas",
			type: Laya.Loader.ATLAS
		});
		assets.push({
			url: "res/atlas/loading.atlas",
			type: Laya.Loader.ATLAS
		});
		assets.push({
			url: Constants.sound0,
			type: Laya.Loader.SOUND
		});
		assets.push({
			url: Constants.sound1,
			type: Laya.Loader.SOUND
		});
		assets.push({
			url: Constants.sound2,
			type: Laya.Loader.SOUND
		});
		assets.push({
			url: Constants.sound3,
			type: Laya.Loader.SOUND
		});
		assets.push({
			url: Constants.sound4,
			type: Laya.Loader.SOUND
		})

		assets.push({
			url: Constants.soundBgm8,
			type: Laya.Loader.SOUND
		})

		assets.push({
			url: Constants.score1,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.score2,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.score3,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.score4,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.sports0,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.sports1,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.sports2,
			type: Laya.Loader.IMAGE
		})

		assets.push({
			url: Constants.view,
			type: Laya.Loader.IMAGE
		})
		assets.push({url:'ani/2002Ani.ani'})
		assets.push({url:'ani/2004.ani'})
		assets.push({url:'ani/BallAni.ani'})
		assets.push({url:'ani/BallManAni.ani'})
		assets.push({url:'ani/basketball.ani'})
		assets.push({url:'ani/BoardAni.ani'})
		assets.push({url:'ani/clockAni.ani'})
		assets.push({url:'ani/ComputerAni.ani'})
		assets.push({url:'ani/CrowdAni.ani'})
		assets.push({url:'ani/CupAni.ani'})
		assets.push({url:'ani/DBHit.ani'})
		assets.push({url:'ani/down.ani'})
		assets.push({url:'ani/downClick.ani'})
		assets.push({url:'ani/dumbbell.ani'})
		assets.push({url:'ani/dumbbellAni.ani'})
		assets.push({url:'ani/electricmanAni.ani'})
		assets.push({url:'ani/equipmentAni.ani'})
		assets.push({url:'ani/first.ani'})
		assets.push({url:'ani/football.ani'})
		assets.push({url:'ani/FootballAni.ani'})
		assets.push({url:'ani/GogglesAni.ani'})
		assets.push({url:'ani/HatAni.ani'})
		assets.push({url:'ani/headAni.ani'})
		assets.push({url:'ani/HeartAni.ani'})
		assets.push({url:'ani/liuxiangAni.ani'})
		assets.push({url:'ani/loading.ani'})
		assets.push({url:'ani/longClick.ani'})
		assets.push({url:'ani/MedalAni.ani'})
		assets.push({url:'ani/page2Run.ani'})
		assets.push({url:'ani/page3_runman.ani'})
		assets.push({url:'ani/ScoreboardAni.ani'})
		assets.push({url:'ani/ShoesAni.ani'})
		assets.push({url:'ani/ShotAni.ani'})
		assets.push({url:'ani/StageAni.ani'})
		assets.push({url:'ani/swimmingAni.ani'})
		assets.push({url:'ani/text2002Ani.ani'})
		assets.push({url:'ani/text2004Ani.ani'})
		assets.push({url:'ani/text2008Ani.ani'})
		assets.push({url:'ani/text2012Ani.ani'})
		assets.push({url:'ani/WallAni.ani'})
		assets.push({url:'ani/WaterLeftAni.ani'})
		assets.push({url:'ani/WaterRightAni.ani'})
		assets.push({url:'ani/WhistleAni.ani'})
		assets.push({url:'ani/winAni.ani'})
		assets.push({url:'ani/WinManAni.ani'})
		assets.push({url:'ani/music.ani'})
		// 预加载资源
		Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false));
		Laya.loader.on(Laya.Event.ERROR, this, this.onError)
	}

	// 必需先加载进度条资源才能显示进度条
	onProgressAssetsLoaded(): void {
		// 显示进度条
		this.loadingDialog = new LoadingDialog();
		this.loadingDialog.popup(true, false);
		setTimeout(() => {
			this.loadOtherAssets();
		}, 4000);
	}

	onAssetsLoading(progress: number): void {
		this.loadingDialog.changeProgressValue(progress);
	}

	onAssetsLoaded(): void {
		this.loadingDialog.close();
		this.console.text += '资源加载完成。';

		// this.showTipDialog("scroll")

		this.screen1BackGround = new Screen1BackGround();
		Laya.stage.addChild(this.screen1BackGround);
		this.beginListenDrag();

		this.downIcon = new Laya.Animation();
		this.downIcon.loadAnimation("ani/down.ani");
		this.downIcon.pos(250, Laya.Browser.clientHeight + 200);
		Laya.stage.addChild(this.downIcon);
		this.downIcon.play(0, true);

		this.musicAni = new Laya.Animation();
		this.musicAni.loadAnimation("ani/music.ani");
		this.musicAni.pos(450, 50);
		Laya.stage.addChild(this.musicAni);
		this.musicAni.play(0, true);

		this.football = new Football();
		this.football.pos(250, 200);
		Laya.stage.addChild(this.football);
		this.football.hide();
		this.basketball = new Basketball();
		this.basketball.pos(300, 500);
		Laya.stage.addChild(this.basketball);
		this.running = new running();
		this.running.pos(250, 200);
		Laya.stage.addChild(this.running);
		this.swimming = new swimming();
		this.swimming.pos(256, 500);
		Laya.stage.addChild(this.swimming);
		this.page3run = new page3run();
		this.page3run.pos(300, 850);
		Laya.stage.addChild(this.page3run);
		// console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight)

		// 计算背景可拖动区域
		const moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
		this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight)

		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
		// 播放背景音乐
		setTimeout(() => {
			this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants.soundBgm8, 0);			
		}, 200);
	}
	onError(err: string): void {
		console.log("加载失败: " + err);
		this.loadingDialog.updateTip("加载失败: " + err)
	}

	onMouseMove(): void {
		// console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  y2：", this.screen1BackGround.y, '）');
		if (this.screen1BackGround.y == 0) {
			this.firstnum = this.firstnum + (this.firstSt - Laya.stage.mouseY);
			let z = parseInt(this.firstnum / 10 + '');
			this.screen1BackGround.stopDrag();
			if (z < 0) {
				z = 0;
				this.firstnum = 0;
			}
			this.screen1BackGround.moveAni("first", z - 0);
			if (z > 203) {
				z = 203;
				this.firstnum = 2030;
				this.screen1BackGround.y = 10;
				this.screen1BackGround.playAni("first");
			}
		}
		if (this.showingDialog && this.screen1BackGround.y <= -6270 && this.screen1BackGround.y >= -8110) {
			if (!this.hasPlayShotAni2) {
				if (this.firstSt - Laya.stage.mouseY > -50) {
					this.screen1BackGround.playAni("liuxiang");
					this.screen1BackGround.stopAni("downClick");
					this.playSound(Constants.sound1);
					setTimeout(() => {
						this.downIcon.play(0, true);
						this.showingDialog = false;
						this.hasPlayShotAni2 = true;
					}, 1000);
				}
			}
		}
	}

	onStartDrag(): void {
		// console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY);
		if(Laya.stage.mouseX > 450 && Laya.stage.mouseY < 60){
			if(ismusic){
				this.musicAni.gotoAndStop(0);
				this.bgmSoundChannel.pause();
				ismusic = !ismusic;
			} else {
				this.musicAni.play(0,true);
				this.bgmSoundChannel.resume();
				ismusic = !ismusic;
			}
		}
		this.firstSt = Laya.stage.mouseY;
		if (this.showingDialog) {
			if (this.screen1BackGround.y <= -8680) {
				if (!this.hasPlayShotAni3) {
					Laya.timer.once(1000, this, this.onLongDownCheck); // 1秒算长按
					Laya.stage.on(Laya.Event.MOUSE_UP, this, this.notLongDownCheck)
				}
			}
			if (this.screen1BackGround.y <= -13450) {
				if (!this.hasPlayShotAni5) {
					this.onBackgroundClick()
				}
			}
			return
		}
		this.screen1BackGround.startDrag(this.dragRegion, true, 0,300,'',false,0.5)
	}





	onBackgroundMove(): void {
		// console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y)

		// 显示问题
		const needShowQuestion = this.showQuestionDialogIfNeed(this.screen1BackGround.y);
		if (needShowQuestion) {
			this.screen1BackGround.stopDrag();
			return
		}

		// TODO: 根据实际情况显示点击提示
		// this.showTipDialog("click_white");
		// this.showTipDialog("click_black");
		let long = 820;

		if (this.screen1BackGround.y <= -2275) { // 不给拖动，摇一摇显示射门动画
			if (this.hasPlayShotAni) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag();
				this.downIcon.gotoAndStop(10);
				this.showShakeDialog();
			}
		}
		if (this.screen1BackGround.y <= -6410) {
			if (this.hasPlayShotAni2) {
				this.console.text += '已经显示过3动画\n';
			} else {
				this.screen1BackGround.y = Math.min(0, -6410)
				this.showingDialog = true;
				this.hasPlayShotAni2 = false;
				this.downIcon.gotoAndStop(10);
				this.console.text += '没有显示过2动画\n';
			}
		}
		if (this.screen1BackGround.y <= -8680) {
			if (this.hasPlayShotAni3) {
				this.console.text += '已经显示过3动画\n';
			} else {
				this.screen1BackGround.y = Math.min(0, -8680)
				this.showingDialog = true;
				this.hasPlayShotAni3 = false;
				this.downIcon.gotoAndStop(10);
				this.console.text += '没有显示过3动画\n';
			}
		}
		if (this.screen1BackGround.y <= -11340) {
			if (this.hasPlayShotAni4) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.screen1BackGround.y = Math.min(0, -11340)
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag();
				this.downIcon.gotoAndStop(10);
				this.showShakeDialog4();
			}
		}
		if (this.screen1BackGround.y <= -13500) {
			if (this.hasPlayShotAni5) {
				this.screen1BackGround.stopDrag();
				this.console.text += '已经显示过5动画\n';
			} else {
				this.screen1BackGround.y = Math.min(0, -13500)
				this.showingDialog = true;
				this.hasPlayShotAni5 = false;
				this.console.text += '没有显示过5动画\n';
				this.downIcon.gotoAndStop(10);
			}
		}
		//page1
		if (this.screen1BackGround.y <= -815 && this.screen1BackGround.y >= -2215) { // 隐藏足球
			this.football.show();
			let z = parseInt((-this.screen1BackGround.y - 815) / 10 + '');
			this.football.goPath(z - 0);
		} else {
			this.football.goPath(140);
			this.football.hide();
		}
		if (this.screen1BackGround.y <= -1575 && this.screen1BackGround.y >= -1725) {
			if (!this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.playAni("cup");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.stopAni("cup");
			}
		}
		if (this.screen1BackGround.y <= -1620 && this.screen1BackGround.y >= -1770) {
			if (!this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.playAni("whistle");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("whistle")) {
				this.screen1BackGround.stopAni("whistle");
			}
		}
		if (this.screen1BackGround.y <= -3045 && this.screen1BackGround.y >= -3200) {
			if (!this.screen1BackGround.isAniPlaying("text2002")) {
				this.screen1BackGround.playAni("text2002");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2002")) {
				this.screen1BackGround.stopAni("text2002");
			}
		}
		if (this.screen1BackGround.y <= -1730 - 812 && this.screen1BackGround.y >= -3455) {
			this.screen1BackGround.playAni("win");
		}
		//page2
		if (this.screen1BackGround.y <= -4510 && this.screen1BackGround.y >= -5400) {
			this.running.show();
			let z = parseInt((-this.screen1BackGround.y - 4510) / 10 + '');
			this.running.goPath(z - 0);
		} else {
			this.running.hide();
		}
		if (this.screen1BackGround.y <= -4520) {
			this.screen1BackGround.stopAni("page2_start");
		} else {
			this.screen1BackGround.stopAni("page2_start1");
		}
		if (this.screen1BackGround.y <= -4522 && this.screen1BackGround.y >= -4671) {
			if (!this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.playAni("dumbbell");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("dumbbell")) {
				this.screen1BackGround.stopAni("dumbbell");
			}
		}

		if (this.screen1BackGround.y <= -4957 && this.screen1BackGround.y >= -5010) {
			if (!this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.playAni("equipment");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("equipment")) {
				this.screen1BackGround.stopAni("equipment");
			}
		}
		if (this.screen1BackGround.y <= -5190 && this.screen1BackGround.y >= -5348) {
			if (!this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.playAni("clock");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("clock")) {
				this.screen1BackGround.stopAni("clock");
			}
		}
		if (this.screen1BackGround.y <= -5454 && this.screen1BackGround.y >= -5603) {
			if (!this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.playAni("text2004");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2004")) {
				this.screen1BackGround.stopAni("text2004");
			}
		}
		if (this.screen1BackGround.y <= -5725 && this.screen1BackGround.y >= -5866) {
			if (!this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.playAni("electricman");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("electricman")) {
				this.screen1BackGround.stopAni("electricman");
			}
		}
		if (this.screen1BackGround.y <= -6415 && this.screen1BackGround.y >= -8110) {
			// this.screen1BackGround.stopAni("liuxiang0");
		} else {
			if (this.hasPlayShotAni2) {
				this.screen1BackGround.stopAni("liuxiang1");
			} else {
				this.screen1BackGround.stopAni("liuxiang");
			}
		}
		//page3
		if (this.screen1BackGround.y <= -8110+long && this.screen1BackGround.y >= -9060+long) {
			this.page3run.show();
			let z = parseInt((-this.screen1BackGround.y - 8110+long) / 10 + '');
			this.page3run.goPath(z - 0);
		} else {
			this.page3run.hide();
		}
		if (this.screen1BackGround.y <= -8100+long && this.screen1BackGround.y >= -8470+long) {
			this.screen1BackGround.stopAni("page3_start");
		} else {
			this.screen1BackGround.stopAni("page3_start1");
		}
		if (this.screen1BackGround.y <= -8348+long && this.screen1BackGround.y >= -8415+long) {
			if (!this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.playAni("medal");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.stopAni("medal");
			}
		}
		if (this.screen1BackGround.y <= -8625+long && this.screen1BackGround.y >= -8773+long) {
			if (!this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.playAni("stage");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.stopAni("stage");
			}
		}
		if (this.screen1BackGround.y <= -9131+long && this.screen1BackGround.y >= -9281+long) {
			if (!this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.playAni("text2008");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.stopAni("text2008");
			}
		}
		if (this.screen1BackGround.y <= -9535+long && this.screen1BackGround.y >= -11190+long) {
			// this.screen1BackGround.stopAni("crowd0");
		} else {
			if (this.hasPlayShotAni3) {
				this.screen1BackGround.stopAni("crowd1");
			} else {
				this.screen1BackGround.stopAni("crowd");
			}
		}
		//page4
		if (this.screen1BackGround.y <= -9500 && this.screen1BackGround.y >= -9720) {
			if (!this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.playAni("heart");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.stopAni("heart");
			}
		}

		if (this.screen1BackGround.y <= -9580 && this.screen1BackGround.y >= -11430) {
			this.swimming.show();
			let z = parseInt((-this.screen1BackGround.y - 9580) / 10 + '');
			this.swimming.goPath(z - 0);
		} else {
			this.swimming.hide();
		}
		if (this.screen1BackGround.y <= -9650 && this.screen1BackGround.y >= -9800) {
			if (!this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.playAni("text2012");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.stopAni("text2012");
			}
		}
		if (this.screen1BackGround.y <= -9810 && this.screen1BackGround.y >= -10040) {
			if (!this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.playAni("board");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.stopAni("board");
			}
		}
		if (this.screen1BackGround.y <= -10190 && this.screen1BackGround.y >= -10390) {
			if (!this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.playAni("wall");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.stopAni("wall");
			}
		}
		if (this.screen1BackGround.y <= -10430 && this.screen1BackGround.y >= -10600) {
			if (!this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.playAni("goggles");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.stopAni("goggles");
			}
		}
		if (this.screen1BackGround.y <= -10600+long && this.screen1BackGround.y >= -10750) {
			if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.playAni("waterLeft");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.stopAni("waterLeft");
			}
		}
		if (this.screen1BackGround.y <= -11370 && this.screen1BackGround.y >= -12100) {
			
		} else {
			if (this.hasPlayShotAni4) {
				this.screen1BackGround.stopAni("winMan1");
			} else {
				this.screen1BackGround.stopAni("winMan0");				
			}
		}
		//page5
		if (this.screen1BackGround.y <= -12545 && this.screen1BackGround.y >= -13145) {
			this.basketball.show();
			let z = parseInt((-this.screen1BackGround.y - 12545) / 10 + '');
			this.basketball.goPath(z - 0);
		} else {
			this.basketball.hide();
		}
		if (this.screen1BackGround.y <= -11680 && this.screen1BackGround.y >= -12550) {
			if (!this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.playAni("ball");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.stopAni("ball");
			}
		}
		if (this.screen1BackGround.y <= -11680 && this.screen1BackGround.y >= -12550) {
			if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.playAni("scoreboard");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.stopAni("scoreboard");
			}
		}
		if (this.screen1BackGround.y <= -12770 && this.screen1BackGround.y >= -12900) {
			if (!this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.playAni("shoes");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.stopAni("shoes");
			}
		}

		if (this.screen1BackGround.y <= -13100 && this.screen1BackGround.y >= -13250) {
			if (!this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.playAni("hat");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("hat")) {
				this.screen1BackGround.stopAni("hat");
			}
		}
	}

	onDeviceShake(): void {
		if (this.shakeDialog) {
			this.shakeDialog.close();
			this.showingDialog = false
			this.shakeDialog = null
		}
		this.shakeCount++
		this.console.text += "设备摇晃了" + this.shakeCount + "次\n";
		if (this.shakeCount >= 1) {
			Laya.Shake.instance.stop();
			this.shakeCount = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni) {
				return
			}
			this.screen1BackGround.playAni("shot")
			this.downIcon.play(0, true);
			this.hasPlayShotAni = true
			this.playSound(Constants.sound0);
		}
	}
	onDeviceShake4(): void {
		if (this.shakeDialog4) {
			this.shakeDialog4.close();
			this.showingDialog = false
			this.shakeDialog4 = null
		}
		this.shakeCount4++
		this.console.text += "设备摇晃了" + this.shakeCount4 + "次\n";
		if (this.shakeCount4 >= 1) {
			Laya.Shake.instance.stop();
			this.shakeCount4 = 0
			this.console.text += "停止接收设备摇动";
			// 播放射门动画
			if (this.hasPlayShotAni4) {
				return
			}
			this.swimming.hide();
			this.screen1BackGround.playAni("winMan")
			this.downIcon.play(0, true);
			this.hasPlayShotAni4 = true
			this.playSound(Constants.sound3);
		}
	}
	onQuestionDialogClose(index: string, type: string): void {
		// console.log("onQuestionDialogClose", type, index);
		const right = (type === "true") // TODO: 计分
		if (right) {
			this.questionScore++;
		}
		this.showingDialog = false

		if (this.showQuestionIndexList.length >= 10) {	// 显示了10条题了
			// Laya.timer.once(1000, this, this.showScoreResultDialg, [this.questionScore]);
			// setTimeout(() => {
			// 	this.showScoreResultDialg(this.questionScore);
			// }, 2000);
			// this.showScoreResultDialg(this.questionScore);
		}

	}

	private showScoreResultDialg(score: number) {
		// 不让滚动了
		Laya.stage.height = Laya.Browser.clientHeight
		Laya.stage.width = Laya.Browser.clientWidth
		// // 合成图片
		// const tmp = new Laya.Sprite();
		// let bgImageUrl = ""
		// if (score >= 8) {
		// 	bgImageUrl = Constants.score4
		// } else if (score >= 5) {
		// 	bgImageUrl = Constants.score3
		// } else if (score >= 2) {
		// 	bgImageUrl = Constants.score2
		// } else {
		// 	bgImageUrl = Constants.score1
		// }
		window.location.href = 'https://dev170.weibanker.cn/chenjj/www/sina/scoreResult/scoreResult.html?score='+score;
		return;
		// Laya.LocalStorage.setItem('score',score+'');
		// let name = Laya.LocalStorage.getItem('test')
		// alert('name:'+name);
		// const bgImage = Laya.Loader.getRes(bgImageUrl);
		// tmp.graphics.fillText(name,250,50,'26px','#000000','center')
		// tmp.graphics.drawTexture(bgImage, 0, 0);
		// const scoreImage = Laya.loader.getRes(`view/num_${score}.png`);
		// tmp.graphics.drawTexture(scoreImage, 400, 325)

		// const htmlCanvas = tmp.drawToCanvas(512, 808, 0, 0);
		// htmlCanvas.toBase64("image/jpeg", 0.9, this.onResultScoreImageToBase64)



		// this.showingDialog = true
		// UIConfig.closeDialogOnSide = false
		// Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		// const scoreResultDialog = new ScoreResultDialog(score);
		// scoreResultDialog.popup(true, false);
		// scoreResultDialog.closeHandler = Laya.Handler.create(this, this.onScoreDialogClose)
	}

	private onResultScoreImageToBase64(res) {
		let oneMoreButtonX = 80
		let oneMoreButtonY = 618
		let oneMoreButtonWidth = 150
		let oneMoreButtonHeight = 50

		let shareButtonX = 290

		const ratio = Laya.Browser.clientWidth / 512
		oneMoreButtonX = oneMoreButtonX * ratio
		oneMoreButtonY = oneMoreButtonY * ratio
		oneMoreButtonWidth = oneMoreButtonWidth * ratio
		oneMoreButtonHeight = oneMoreButtonHeight * ratio
		shareButtonX = shareButtonX * ratio
		const divElement = Laya.Browser.createElement("div");
		divElement.style.zIndex = 10000000
		divElement.style.position = "absolute"
		divElement.style.width = Laya.Browser.clientWidth
		divElement.style.height = Laya.Browser.clientHeight
		divElement.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
		let innerHTML = `<img style="width:${Laya.Browser.clientWidth}" src="${res}"/>`
		innerHTML += `<a style="position:absolute;left: ${oneMoreButtonX}px;top:${oneMoreButtonY}px;width:${oneMoreButtonWidth}px;height:${oneMoreButtonHeight}px" href="javascript:location.reload()"></a>`
		innerHTML += `<a style="position:absolute;left: ${shareButtonX}px;top:${oneMoreButtonY}px;width:${oneMoreButtonWidth}px;height:${oneMoreButtonHeight}px" href="javascript:alert('点击右上角按钮可以发送给朋友或分享到朋友圈')"></a>`
		divElement.innerHTML = innerHTML
		// divElement.innerHTML = `<img src="view/score_1.jpg"></img>`
		Laya.Browser.document.body.appendChild(divElement)
	}

	private onScoreDialogClose() {
		this.showingDialog = true
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
		const isOdd = !(hasShowLength % 2);
		if (isOdd) { // 随机
			const random = this.getRandomQuestionIndex();
			this.showQuestion(random);
		} else {	// 取前5位
			const index = Math.floor(hasShowLength / 2);
			this.showQuestion(index);
		}
		return true
	}

	private getRandomQuestionIndex(): number {
		const max = QuestionData.length - 5
		const random = Math.round((Math.random() * max)) + 5
		if (this.showQuestionIndexList.indexOf(random) == -1) {
			return random
		} else { // 已经显示过重新获取
			return this.getRandomQuestionIndex();
		}
	}

	private showQuestion(index: number): void {
		if (index >= QuestionData.length) {
			return
		}
		this.showingDialog = true
		this.showQuestionIndexList.push(index);
		const questionData = QuestionData[index]
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		const questionDialog = new QuestionDialog(questionData);
		questionDialog.popup(true, false);
		questionDialog.closeHandler = Laya.Handler.create(this, this.onQuestionDialogClose, [index])
	}

	private showShakeDialog(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog = new ShakeDialog();
		this.shakeDialog.popup(true, false);
		Laya.Shake.instance.start(5, 500);
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake);
		this.console.text += '开始接收设备摇动\n';
	}
	private showShakeDialog4(): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog4 = new ShakeDialog();
		this.shakeDialog4.popup(true, false);
		Laya.Shake.instance.start(5, 500);
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake4);
		this.console.text += '开始接收设备摇动\n';
	}

	private showTipDialog(tipType: TipType): void {
		this.showingDialog = true
		UIConfig.closeDialogOnSide = true
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		const scrollDialog = new ScrollDialog(tipType)

		scrollDialog.popup(true);
		scrollDialog.closeHandler = Laya.Handler.create(this, this.onTipDialogClose)
	}

	private onTipDialogClose() {
		this.showingDialog = false
	}

	private playSound(url: string) {
		this.bgmSoundChannel.pause();
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

	开始监听拖动
	private beginListenDrag(): void {
		this.cancelListenClick();
		this.cancelListenLongClick();
		this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove)
	}

	// 点击触发事件
	private onBackgroundClick(): void {
		if(this.isPlaySound4){
			this.playSound(Constants.sound4);
			this.isPlaySound4 = false;	
		}
		let bally = this.ballY
		this.ballY = bally + 5;
		// console.log(this.ballY)
		if (this.ballY < 41) {
			this.screen1BackGround.moveAni('ballMan', this.ballY)
		} else {
			this.hasPlayShotAni5 = true;
			setTimeout(() => {
			window.location.href = 'https://dev170.weibanker.cn/chenjj/www/sina/scoreResult/scoreResult.html?score='+this.questionScore;
				
				// this.showScoreResultDialg(this.questionScore)
			}, 1500);
		}
	}
	// 长按触发事件
	private onBackgroundLongClick(): void {
		this.screen1BackGround.playAni("crowd");
		this.screen1BackGround.stopAni("longClick");
		this.downIcon.play(0, true);
		this.showingDialog = false;
		this.hasPlayShotAni3 = true;
		this.playSound(Constants.sound2);
	}

	// private cancelListenDrag(): void {
	// 	this.screen1BackGround.offAll(Laya.Event.DRAG_MOVE)
	// }

	private cancelListenClick(): void {
		this.screen1BackGround.offAll(Laya.Event.MOUSE_DOWN)
	}

	private cancelListenLongClick(): void {
		this.screen1BackGround.offAll(Laya.Event.MOUSE_DOWN);
		this.screen1BackGround.offAll(Laya.Event.MOUSE_UP);
		this.isLongClick = false
	}

	private notLongDownCheck() {
		if (this.isLongClick) { // 不算长按
			this.isLongClick = false;
			return
		} else {
			Laya.timer.clear(this, this.onLongDownCheck)
		}
		Laya.stage.off(Laya.Event.MOUSE_UP, this, this.notLongDownCheck)
	}
	private onLongDownCheck() {
		this.isLongClick = true;
		this.onBackgroundLongClick()
	}

}
//激活启动类
new Main();
