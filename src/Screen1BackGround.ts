import GameConfig from "./GameConfig";

/**
 * 场景1背景
 */

type AniName = "cup" | "whistle" | "shot"

export default class Screen1BackGround extends Laya.Sprite {
    private bg: Laya.Sprite;
    private cupAni: Laya.Animation
    private whistleAni: Laya.Animation
    private shotAni: Laya.Animation

    constructor() {
        super();
        this.init()
    }
    init(): void {
        this.bg = new Laya.Sprite()
        this.bg.loadImage("bg/background1.png")
        this.addChild(this.bg)

        this.cupAni = new Laya.Animation()
        // TODO: 调整动画
        this.cupAni.loadAnimation("ani/CupAni.ani")
        this.addChild(this.cupAni)
        // TODO: 调整位置
        this.cupAni.pos(400, 1020)
     

        this.whistleAni = new Laya.Animation()
        this.whistleAni.loadAnimation("ani/WhistleAni.ani")
        this.addChild(this.whistleAni)
        this.whistleAni.pos(100, 980)
     

        this.shotAni = new Laya.Animation()
        this.shotAni.loadAnimation("ani/ShotAni.ani")
        this.addChild(this.shotAni)
        this.shotAni.pos(200, 1600)
  
    }

    stopAni(aniName: AniName): void {
        switch (aniName) {
            case "cup":
                this.cupAni.gotoAndStop(0);
                break;
            case "whistle":
                this.whistleAni.gotoAndStop(0);
                break;
            case "shot":
                this.shotAni.gotoAndStop(0);
                break
        }
    }
    playAni(aniName: AniName) {
        switch (aniName) {
            case "cup":
                this.cupAni.play(0, false)
                break;
            case "whistle":
                this.whistleAni.play(0, false)
                break;
            case "shot":
                this.shotAni.play(0, false)
                break
        }
    }
    isAniPlaying(aniName: AniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.isPlaying
            case "whistle":
                return this.whistleAni.isPlaying
            case "shot":
                return this.shotAni.isPlaying
        }
    }
    setAniVisible(aniName: AniName, visible: boolean) {
        switch (aniName) {
            case "cup":
                this.cupAni.visible = visible
                break
            case "whistle":
                this.whistleAni.visible = visible
                break
            case "shot":
                this.shotAni.visible = visible
                break
        }
    }
    isAniVisible(aniName: AniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.visible
            case "whistle":
                return this.whistleAni.visible
            case "shot":
                return this.shotAni.visible
        }
    }



}