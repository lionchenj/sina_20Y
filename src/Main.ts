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
import ScoreResultDialog from "./ScoreResultDialog";
class Main {
	private firstSt: number = 0
	private firstnum: number = 0
	private ballY: number = 0
	private football: Football
	private basketball: Basketball
	private running: running
	private swimming: swimming
	private page3run: page3run
	private page1e2s: page1e2s
	private page2e3s: page2e3s
	private page3e4s: page3e4s
	private page4e5s: page4e5s


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
	private showingDialog4 = false

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
		console.log("加载进度: " + progress);
		this.loadingDialog.changeProgressValue(progress);
	}

	onAssetsLoaded(): void {
		this.loadingDialog.close();
		this.console.text += '资源加载完成。';

		// this.showTipDialog("scroll")

		this.screen1BackGround = new Screen1BackGround();
		Laya.stage.addChild(this.screen1BackGround);
		this.beginListenDrag();

		this.football = new Football();
		this.football.pos(327, 200);
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
		this.page1e2s = new page1e2s();
		this.page1e2s.pos(250, 500);
		Laya.stage.addChild(this.page1e2s);
		this.page2e3s = new page2e3s();
		this.page2e3s.pos(250, 500);
		Laya.stage.addChild(this.page2e3s);
		this.page3e4s = new page3e4s();
		this.page3e4s.pos(270, 700);
		Laya.stage.addChild(this.page3e4s);
		this.page4e5s = new page4e5s();
		this.page4e5s.pos(250, 700);
		Laya.stage.addChild(this.page4e5s);
		console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight)

		// 计算背景可拖动区域
		const moableHeight = Laya.stage.height - Laya.Browser.clientHeight;
		this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight)

		Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag);
		// 播放背景音乐
		this.bgmSoundChannel = Laya.SoundManager.playMusic(Constants.soundBgm8, 0)
	}

	onError(err: string): void {
		console.log("加载失败: " + err);
		this.loadingDialog.updateTip("加载失败: " + err)
	}

	onMouseMove(): void {
		console.log("onMouseMove(Y：", Laya.stage.mouseY, ";  y2：", this.screen1BackGround.y, '）');
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
				this.screen1BackGround.startDrag(this.dragRegion, false, 0);
			}
		}
		if (this.showingDialog && this.screen1BackGround.y <= -6350) {
			if (!this.hasPlayShotAni2) {
				if (this.firstSt - Laya.stage.mouseY > 200) {
					this.screen1BackGround.playAni("liuxiang");
					this.showingDialog = false;
					this.hasPlayShotAni2 = true;
					this.playSound(Constants.sound1);
				}
			}
		}
	}

	onStartDrag(): void {
		console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY);
		this.firstSt = Laya.stage.mouseY;
		if (this.showingDialog) {
			if (this.screen1BackGround.y <= -9500) {
				if (!this.hasPlayShotAni3) {
					Laya.timer.once(1000, this, this.onLongDownCheck); // 1秒算长按
					Laya.stage.on(Laya.Event.MOUSE_UP, this, this.notLongDownCheck)
				}
			}
			if (this.screen1BackGround.y <= -15946) {
				if (!this.hasPlayShotAni5) {
					this.playSound(Constants.sound4);
					this.onBackgroundClick()
				}
			}
			return
		}
		this.screen1BackGround.startDrag(this.dragRegion, false, 0)
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
		// this.showTipDialog("click_black")


		if (this.screen1BackGround.y <= -2275) { // 不给拖动，摇一摇显示射门动画
			if (this.hasPlayShotAni) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag();
				// 显示过摇一摇提示
				this.showShakeDialog();
			}
		}
		if (this.screen1BackGround.y <= -6350) {
			if (this.hasPlayShotAni2) {
				this.console.text += '已经显示过3动画\n';
			} else {
				this.showingDialog = true;
				this.hasPlayShotAni2 = false;
				this.console.text += '没有显示过2动画\n';
				this.screen1BackGround.stopDrag();
			}
		}
		if (this.screen1BackGround.y <= -9500) {
			if (this.hasPlayShotAni3) {
				this.console.text += '已经显示过3动画\n';
			} else {
				this.showingDialog = true;
				this.hasPlayShotAni3 = false;
				this.console.text += '没有显示过3动画\n';
				this.screen1BackGround.stopDrag();
			}
		}
		if (this.screen1BackGround.y <= -12945) {
			if (this.hasPlayShotAni4) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag();
				// 显示过摇一摇提示
				this.showShakeDialog4();
			}
		}
		if (this.screen1BackGround.y <= -15946) {
			if (this.hasPlayShotAni5) {
				this.console.text += '已经显示过5动画\n';
			} else {
				this.showingDialog = true;
				this.hasPlayShotAni5 = false;
				this.console.text += '没有显示过5动画\n';
				this.screen1BackGround.stopDrag();
			}
		}

		if (this.screen1BackGround.y <= -815 && this.screen1BackGround.y >= -2215) { // 隐藏足球
			this.football.show();
			let z = parseInt((-this.screen1BackGround.y -815) / 10 + '');
			this.football.goPath(z - 0);
		} else {
			this.football.goPath(140);
			this.football.hide();
		}
		// 判断是否需要播放cup ani
		if (this.screen1BackGround.y <= -1575 && this.screen1BackGround.y >= -1725) {
			if (!this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.playAni("cup");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("cup")) {
				this.screen1BackGround.stopAni("cup");
			}
		}

		// 判断是否需要播放口哨动画
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
		} else {
			this.screen1BackGround.stopAni("win");
		}

		if (this.screen1BackGround.y <= -3455 && this.screen1BackGround.y >= -4525) {
			this.page1e2s.show();
			let z = parseInt((-this.screen1BackGround.y - 3455) / 10 + '');
			this.page1e2s.goPath(z - 0);
		} else {
			this.page1e2s.hide();
		}
		//page2
		if (this.screen1BackGround.y <= -4530 && this.screen1BackGround.y >= -5430) {
			this.running.show();
			let z = parseInt((-this.screen1BackGround.y - 4530) / 10 + '');
			this.running.goPath(z - 0);
		} else {
			this.running.goPath(81);
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
		if (this.screen1BackGround.y <= -6415 && this.screen1BackGround.y >= -8100) {
			this.screen1BackGround.stopAni("liuxiang0");
		} else {
			if (this.hasPlayShotAni2) {
				this.screen1BackGround.stopAni("liuxiang1");
			} else {
				this.screen1BackGround.stopAni("liuxiang");
			}
		}
		if (this.screen1BackGround.y <= -6410 && this.screen1BackGround.y >= -8100) {
			this.page2e3s.show();
			let z = parseInt((-this.screen1BackGround.y - 6410) / 10 + '');
			this.page2e3s.goPath(z - 0);
		} else {
			this.page2e3s.hide();
		}

		//page3

		if (this.screen1BackGround.y <= -8110 && this.screen1BackGround.y >= -9060) {
			this.page3run.show();
			let z = parseInt((-this.screen1BackGround.y - 8110) / 10 + '');
			this.page3run.goPath(z - 0);
		} else {
			this.page3run.hide();
		}
		if (this.screen1BackGround.y <= -8100 && this.screen1BackGround.y >= -8470) {
			this.screen1BackGround.stopAni("page3_start");
		} else {
			this.screen1BackGround.stopAni("page3_start1");
		}
		if (this.screen1BackGround.y <= -8348 && this.screen1BackGround.y >= -8415) {
			if (!this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.playAni("medal");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("medal")) {
				this.screen1BackGround.stopAni("medal");
			}
		}
		if (this.screen1BackGround.y <= -8625 && this.screen1BackGround.y >= -8773) {
			if (!this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.playAni("stage");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("stage")) {
				this.screen1BackGround.stopAni("stage");
			}
		}
		if (this.screen1BackGround.y <= -9131 && this.screen1BackGround.y >= -9281) {
			if (!this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.playAni("text2008");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2008")) {
				this.screen1BackGround.stopAni("text2008");
			}
		}
		if (this.screen1BackGround.y <= - 9535 && this.screen1BackGround.y >= -11190) {
			this.screen1BackGround.stopAni("crowd0");
		} else {
			if (this.hasPlayShotAni3) {
				this.screen1BackGround.stopAni("crowd1");
			} else {
				this.screen1BackGround.stopAni("crowd");
			}
		}
		if (this.screen1BackGround.y <= - 9540 && this.screen1BackGround.y >= -11190) {
			this.page3e4s.show();
			let z = parseInt((-this.screen1BackGround.y - 9540) / 10 + '');
			this.page3e4s.goPath(z - 0);
		} else {
			this.page3e4s.hide();
		}

		//page4
		if (this.screen1BackGround.y <= -11189 && this.screen1BackGround.y >= -11670) {
			if (!this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.playAni("heart");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("heart")) {
				this.screen1BackGround.stopAni("heart");
			}
		}

		if (this.screen1BackGround.y <= -11190 && this.screen1BackGround.y >= -13040) {
			this.swimming.show();
			let z = parseInt((-this.screen1BackGround.y - 11190) / 10 + '');
			this.swimming.goPath(z - 0);
		} else {
			this.swimming.hide();
		}
		if (this.screen1BackGround.y <= -11162 && this.screen1BackGround.y >= -11313) {
			if (!this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.playAni("text2012");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("text2012")) {
				this.screen1BackGround.stopAni("text2012");
			}
		}
		if (this.screen1BackGround.y <= -11376 && this.screen1BackGround.y >= -11519) {
			if (!this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.playAni("board");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("board")) {
				this.screen1BackGround.stopAni("board");
			}
		}
		if (this.screen1BackGround.y <= -11743 && this.screen1BackGround.y >= -11907) {
			if (!this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.playAni("wall");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("wall")) {
				this.screen1BackGround.stopAni("wall");
			}
		}
		if (this.screen1BackGround.y <= -12066 && this.screen1BackGround.y >= -12306) {
			if (!this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.playAni("goggles");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("goggles")) {
				this.screen1BackGround.stopAni("goggles");
			}
		}
		if (this.screen1BackGround.y <= -12405 && this.screen1BackGround.y >= -12558) {
			if (!this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.playAni("waterLeft");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("waterLeft")) {
				this.screen1BackGround.stopAni("waterLeft");
			}
		}
		if (this.screen1BackGround.y <= -13100 && this.screen1BackGround.y >= -14790) {
			this.screen1BackGround.stopAni("winMan0");
		} else {
			if (this.hasPlayShotAni4) {
				this.screen1BackGround.stopAni("winMan1");
			} else {
				this.screen1BackGround.stopAni("winMan");
			}
		}
		if (this.screen1BackGround.y <= -13100 && this.screen1BackGround.y >= -14790) {
			this.page4e5s.show();
			let z = parseInt((-this.screen1BackGround.y - 13100) / 10 + '');
			this.page4e5s.goPath(z - 0);
		} else {
			this.page4e5s.hide();
		}

		//page5
		if (this.screen1BackGround.y <= -14930 && this.screen1BackGround.y >= -15530) {
			this.basketball.show();
			let z = parseInt((-this.screen1BackGround.y - 14930) / 10 + '');
			this.basketball.goPath(z - 0);
		} else {
			this.basketball.hide();
		}
		if (this.screen1BackGround.y <= -14790 && this.screen1BackGround.y >= -15315) {
			if (!this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.playAni("ball");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("ball")) {
				this.screen1BackGround.stopAni("ball");
			}
		}
		if (this.screen1BackGround.y <= -14470 && this.screen1BackGround.y >= -14562) {
			if (!this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.playAni("scoreboard");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("scoreboard")) {
				this.screen1BackGround.stopAni("scoreboard");
			}
		}
		if (this.screen1BackGround.y <= -15082 && this.screen1BackGround.y >= -15149) {
			if (!this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.playAni("shoes");
			}
		} else {
			if (this.screen1BackGround.isAniPlaying("shoes")) {
				this.screen1BackGround.stopAni("shoes");
			}
		}

		if (this.screen1BackGround.y <= -15415 && this.screen1BackGround.y >= -15496) {
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
			this.hasPlayShotAni = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound0);
			this.screen1BackGround.startDrag(this.dragRegion, false, 0)
		}
	}
	onDeviceShake4(): void {
		if (this.shakeDialog4) {
			this.shakeDialog4.close();
			this.showingDialog4 = false
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
			this.hasPlayShotAni4 = true
			this.console.text += "播放射门动画";

			// TODO: 播放实际需要的声音，并在其他需要的地方调用播放声音
			this.playSound(Constants.sound3);
			this.screen1BackGround.startDrag(this.dragRegion, false, 0)
		}
	}
	onQuestionDialogClose(index: string, type: string): void {
		console.log("onQuestionDialogClose", type, index);
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
		// 合成图片
		const tmp = new Laya.Sprite();
		let bgImageUrl = ""
		if (score >= 8) {
			bgImageUrl = Constants.score4
		} else if (score >= 5) {
			bgImageUrl = Constants.score3
		} else if (score >= 2) {
			bgImageUrl = Constants.score2
		} else {
			bgImageUrl = Constants.score1
		}

		const bgImage = Laya.Loader.getRes(bgImageUrl);
		tmp.graphics.drawTexture(bgImage, 0, 0);
		const scoreImage = Laya.loader.getRes(`view/num_${score}.png`);
		tmp.graphics.drawTexture(scoreImage, 400, 325)

		const htmlCanvas = tmp.drawToCanvas(512, 808, 0, 0);
		htmlCanvas.toBase64("image/jpeg", 0.9, this.onResultScoreImageToBase64)



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
		// 监听摇一摇
		Laya.Shake.instance.start(5, 500);
		Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake);
		this.console.text += '开始接收设备摇动\n';
	}
	private showShakeDialog4(): void {
		this.showingDialog4 = true
		UIConfig.closeDialogOnSide = false
		Laya.Dialog.manager = new Laya.DialogManager()	// 注意：要重新设置manager，UIConfig.closeDialogOnSide = true 设置才生效
		this.shakeDialog4 = new ShakeDialog();
		this.shakeDialog4.popup(true, false);
		// 监听摇一摇
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
		// alert('++1')
		let bally = this.ballY
		this.ballY = bally + 5;
		console.log(this.ballY)
		if (this.ballY < 41) {
			this.screen1BackGround.moveAni('ballMan', this.ballY)
		} else {
			this.showingDialog = false;
			this.hasPlayShotAni5 = true;
			this.showScoreResultDialg(this.questionScore)
		}
	}
	// 长按触发事件
	private onBackgroundLongClick(): void {
		this.screen1BackGround.playAni("crowd");
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

	// private onLongClickDown(): void {
	// 	console.log('22')
	// 	this.isLongClick = true;
	// 	Laya.timer.once(1000, this, this.onLongDownCheck); // 1秒算长按
	// 	this.screen1BackGround.on(Laya.Event.MOUSE_UP, this, this.onLongClickUp);
	// }
	// private onLongClickUp(): void {
	// 	this.isLongClick = false
	// }

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
