import GameConfig from "./GameConfig";
import Screen1BackGround from "./Screen1BackGround";
import Football from "./Football";
import { getFootballX } from "./FootballPath";
import { QuestionDialog } from "./QuestionDialog";
import Constants from "./Constants";
class Main {
	private football: Football
	private screen1BackGround: Screen1BackGround
	private dragRegion: Laya.Rectangle

	private shakeCount:number = 0;
	private hasPlayShotAni = false

	private console: Laya.Text;

	constructor() {
		Laya.init(Constants.stageWidth, Constants.stateHeight, Laya["WebGL"]);
	
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
	
		Laya.stage.bgColor = "white"

		const assets: Array<any> = []
		assets.push({
			url: "bg/background1.png",
			type: Laya.Loader.IMAGE
		})
		assets.push({
			url: "res/atlas/sports.atlas",
			type: Laya.Loader.ATLAS
		})

		// 预加载资源
		Laya.loader.load(assets, Laya.Handler.create(this, this.onAssetsLoaded), Laya.Handler.create(this, this.onAssetsLoading, null, false))
		Laya.loader.on(Laya.Event.ERROR, this, this.onError)

		// 需要显示调试信息可以打开这里
		this.showConsoleText(false);
	
	}

	onVersionLoaded(): void {
		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
	}

	onConfigLoaded(): void {
		//加载IDE指定的场景
		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
	}

	onAssetsLoading(progress: number): void {
		console.log("加载进度: " + progress);
		
		// TODO: 显示进度条
	}

	onAssetsLoaded(): void {
		this.console.text += '资源加载完成。';
		this.screen1BackGround = new Screen1BackGround()
		Laya.stage.addChild(this.screen1BackGround)
		this.screen1BackGround.on(Laya.Event.DRAG_MOVE, this, this.onBackgroundMove)
		this.screen1BackGround.on(Laya.Event.DRAG_START, this, this.onBackgroundStartMove)

		this.football = new Football()
		this.football.pos(327, 233)	// 初始位置
		Laya.stage.addChild(this.football)
		console.log("onAssetsLoaded", Laya.stage.height, Laya.Browser.height, Laya.Browser.clientHeight)

		// 计算背景可拖动区域
		const moableHeight = Laya.stage.height - Laya.Browser.clientHeight
		this.dragRegion = new Laya.Rectangle(0, -moableHeight, 0, moableHeight)

		// Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.onMouseMove)
		Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.onStartDrag)
	}

	onError(err: string): void {
		console.log("加载失败: " + err);
	}

	onMouseMove(): void {
		// 始终保持主角和鼠标位置一致
		// this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
		// console.log("onMouseMove", Laya.stage.mouseX, Laya.stage.mouseY)
		console.log(`map[${Laya.stage.mouseY}] = ${Laya.stage.mouseX}`)
		this.football.pos(Laya.stage.mouseX, Laya.stage.mouseY)
	}

	onStartDrag(): void {
		console.log("onStartDrag", Laya.stage.mouseX, Laya.stage.mouseY)
	
		this.screen1BackGround.startDrag(this.dragRegion, false, 0)
	}

	onBackgroundStartMove(): void {
		// TODO: 这里同样要做一些能否拖动的判断，onBackgroundMove部分逻辑也适应于此方法
	}

	

	onBackgroundMove(): void {
		console.log("onBackgroundMove", this.screen1BackGround.x, this.screen1BackGround.y, this.football.x, this.football.y)

		if (this.screen1BackGround.y <= -800) {	// 不给拖动，摇一摇显示射门动画
			

			if (this.hasPlayShotAni) {
				this.console.text += '已经显示过射门动画\n';
			} else {
				this.console.text += '没有显示过射门动画\n';
				this.screen1BackGround.stopDrag()
				// TODO: 是否显示过摇一摇提示

				// 监听摇一摇

				Laya.Shake.instance.start(5, 500)
				Laya.Shake.instance.on(Laya.Event.CHANGE, this, this.onDeviceShake)
				this.console.text += '开始接收设备摇动\n';
				
				
			}


		}
	
		
		if (this.screen1BackGround.y <= -1100) { // 隐藏足球
			this.football.hide()
		} else {
			this.football.show()

			// 移动足球位置
			// const y = -this.screen1BackGround.y + 232
			let y:number = 0;
			if((-this.screen1BackGround.y + 232) < 960){
				y = -this.screen1BackGround.y + 100;
			}
			if((-this.screen1BackGround.y + 232) < 850){
				y = -this.screen1BackGround.y + 130;
			}
			if((-this.screen1BackGround.y + 232) < 730){
				y = -this.screen1BackGround.y + 150;
			}
			if((-this.screen1BackGround.y + 232) < 580){
				y = -this.screen1BackGround.y + 180;
			}
			if((-this.screen1BackGround.y + 232) < 435){
				y = -this.screen1BackGround.y + 200;
			}
			const x = getFootballX(y)
			if (x == 0) {
				this.football.y = y
			} else {
				this.football.pos(x, y)
			}

			// 判断足球是否需要旋转
			if (this.screen1BackGround.y <= -500) {
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

		
	}
	
	onDeviceShake(): void {
		this.shakeCount ++
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
			// TODO: 这里需要等动画播放完才设置this.hasPlayShotAni = true
			this.hasPlayShotAni = true
			this.console.text += "播放射门动画";
		}
	}

	private showConsoleText(visible: boolean):void
		{
			this.console = new Laya.Text();
			Laya.stage.addChild(this.console);
			this.console.zOrder = 10001
			this.console.y =  10;
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
