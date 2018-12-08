import GameConfig from "./GameConfig";
import Constants from "./Constants";

/**
 * 场景1背景
 */

type AniName = "cup" | "whistle" | "shot" |"win"

export default class Screen1BackGround extends Laya.Sprite {
    private bg1: Laya.Sprite;
    private cupAni: Laya.Animation
    private whistleAni: Laya.Animation
    private shotAni: Laya.Animation
    private text2002Ani: Laya.Animation
    private text2004Ani: Laya.Animation
    private text2008Ani: Laya.Animation
    private text2012Ani: Laya.Animation
    private BallAni: Laya.Animation
    private BallManAni: Laya.Animation
    private BoardAni: Laya.Animation
    private clockAni: Laya.Animation
    private ComputerAni: Laya.Animation
    private CrowdAni: Laya.Animation
    private CupAni: Laya.Animation
    private dumbbellAni: Laya.Animation
    private electricmanAni: Laya.Animation
    private equipmentAni: Laya.Animation
    private FootballAni: Laya.Animation
    private GogglesAni: Laya.Animation
    private HatAni: Laya.Animation
    private HeartAni: Laya.Animation
    private liuxiangAni: Laya.Animation
    private MedalAni: Laya.Animation
    private page02StartAni: Laya.Animation
    private ScoreboardAni: Laya.Animation
    private ShoesAni: Laya.Animation
    private ShotAni: Laya.Animation
    private StageAni: Laya.Animation
    private WallAni: Laya.Animation
    private WaterLeftAni: Laya.Animation
    private WaterRightAni: Laya.Animation
    private WhistleAni: Laya.Animation
    private winAni: Laya.Animation
    private WinManAni: Laya.Animation

    private bg2: Laya.Sprite
    private bg3: Laya.Sprite
    private bg4: Laya.Sprite
    private bg5: Laya.Sprite

    constructor() {
        super();
        this.init()
    }
    init(): void {
        this.bg1 = new Laya.Sprite()
        this.bg1.size(Constants.stageWidth, Constants.background1Height)
        const texture = Laya.loader.getRes(Constants.background1)
        this.bg1.graphics.drawImage(texture)
        this.addChild(this.bg1)

        this.bg2 = new Laya.Sprite()
        this.bg2.pos(0, Constants.background1Height)
        this.bg2.size(Constants.stageWidth, Constants.background2Height)
        const texture2 = Laya.loader.getRes(Constants.background2)
        this.bg2.graphics.drawImage(texture2)
        this.addChild(this.bg2)

        this.bg3 = new Laya.Sprite()
        this.bg3.pos(0, Constants.background1Height + Constants.background2Height)
        this.bg3.size(Constants.stageWidth, Constants.background3Height)
        const texture3 = Laya.loader.getRes(Constants.background3)
        this.bg3.graphics.drawImage(texture3)
        this.addChild(this.bg3)

        this.bg4 = new Laya.Sprite()
        this.bg4.pos(0, Constants.background1Height + Constants.background2Height + Constants.background3Height)
        this.bg4.size(Constants.stageWidth, Constants.background4Height)
        const texture4 = Laya.loader.getRes(Constants.background4)
        this.bg4.graphics.drawImage(texture4)
        this.addChild(this.bg4)

        this.bg5 = new Laya.Sprite()
        this.bg5.pos(0, Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height)
        this.bg5.size(Constants.stageWidth, Constants.background5Height)
        const texture5 = Laya.loader.getRes(Constants.background5)
        this.bg5.graphics.drawImage(texture5)
        this.addChild(this.bg5)

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
     

        this.text2002Ani = new Laya.Animation()
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani")
        this.addChild(this.text2002Ani)
        this.text2002Ani.pos(200, 2500)
        
        this.text2004Ani = new Laya.Animation()
        this.text2004Ani.loadAnimation("ani/text2004Ani.ani")
        this.addChild(this.text2004Ani)
        this.text2004Ani.pos(200, 1600)
        
        this.text2008Ani = new Laya.Animation()
        this.text2008Ani.loadAnimation("ani/text2008Ani.ani")
        this.addChild(this.text2008Ani)
        this.text2008Ani.pos(200, 1600)
        
        this.text2012Ani = new Laya.Animation()
        this.text2012Ani.loadAnimation("ani/text2012Ani.ani")
        this.addChild(this.text2012Ani)
        this.text2012Ani.pos(200, 1600)
        
        this.BallAni = new Laya.Animation()
        this.BallAni.loadAnimation("ani/BallAni.ani")
        this.addChild(this.BallAni)
        this.BallAni.pos(200, 1600)
        
        this.BallManAni = new Laya.Animation()
        this.BallManAni.loadAnimation("ani/BallManAni.ani")
        this.addChild(this.BallManAni)
        this.BallManAni.pos(200, 1600)
        
        this.BoardAni = new Laya.Animation()
        this.BoardAni.loadAnimation("ani/BoardAni.ani")
        this.addChild(this.BoardAni)
        this.BoardAni.pos(200, 1600)
        
        this.clockAni = new Laya.Animation()
        this.clockAni.loadAnimation("ani/clockAni.ani")
        this.addChild(this.clockAni)
        this.clockAni.pos(200, 1600)
        
        this.ComputerAni = new Laya.Animation()
        this.ComputerAni.loadAnimation("ani/ComputerAni.ani")
        this.addChild(this.ComputerAni)
        this.ComputerAni.pos(200, 1600)
        
        this.CrowdAni = new Laya.Animation()
        this.CrowdAni.loadAnimation("ani/CrowdAni.ani")
        this.addChild(this.CrowdAni)
        this.CrowdAni.pos(200, 1600)
        
        this.dumbbellAni = new Laya.Animation()
        this.dumbbellAni.loadAnimation("ani/dumbbellAni.ani")
        this.addChild(this.dumbbellAni)
        this.dumbbellAni.pos(400, 1020)
        
        this.electricmanAni = new Laya.Animation()
        this.electricmanAni.loadAnimation("ani/electricmanAni.ani")
        this.addChild(this.electricmanAni)
        this.electricmanAni.pos(200, 1600)
        
        this.equipmentAni = new Laya.Animation()
        this.equipmentAni.loadAnimation("ani/equipmentAni.ani")
        this.addChild(this.equipmentAni)
        this.equipmentAni.pos(200, 1600)
        
        this.FootballAni = new Laya.Animation()
        this.FootballAni.loadAnimation("ani/FootballAni.ani")
        this.addChild(this.FootballAni)
        this.FootballAni.pos(200, 1600)
        
        this.GogglesAni = new Laya.Animation()
        this.GogglesAni.loadAnimation("ani/GogglesAni.ani")
        this.addChild(this.GogglesAni)
        this.GogglesAni.pos(200, 1600)
        
        this.HatAni = new Laya.Animation()
        this.HatAni.loadAnimation("ani/HatAni.ani")
        this.addChild(this.HatAni)
        this.HatAni.pos(200, 1600)
        
        this.HeartAni = new Laya.Animation()
        this.HeartAni.loadAnimation("ani/HeartAni.ani")
        this.addChild(this.HeartAni)
        this.HeartAni.pos(200, 1600)
        
        this.liuxiangAni = new Laya.Animation()
        this.liuxiangAni.loadAnimation("ani/liuxiangAni.ani")
        this.addChild(this.liuxiangAni)
        this.liuxiangAni.pos(200, 1600)
        
        this.MedalAni = new Laya.Animation()
        this.MedalAni.loadAnimation("ani/MedalAni.ani")
        this.addChild(this.MedalAni)
        this.MedalAni.pos(200, 1600)
        
        this.page02StartAni = new Laya.Animation()
        this.page02StartAni.loadAnimation("ani/page02StartAni.ani")
        this.addChild(this.page02StartAni)
        this.page02StartAni.pos(200, 1600)
        
        this.ScoreboardAni = new Laya.Animation()
        this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani")
        this.addChild(this.ScoreboardAni)
        this.ScoreboardAni.pos(200, 1600)
        
        this.ShoesAni = new Laya.Animation()
        this.ShoesAni.loadAnimation("ani/ShoesAni.ani")
        this.addChild(this.ShoesAni)
        this.ShoesAni.pos(200, 1600)
        
        this.ShotAni = new Laya.Animation()
        this.ShotAni.loadAnimation("ani/ShotAni.ani")
        this.addChild(this.ShotAni)
        this.ShotAni.pos(200, 1600)
        
        this.StageAni = new Laya.Animation()
        this.StageAni.loadAnimation("ani/StageAni.ani")
        this.addChild(this.StageAni)
        this.StageAni.pos(200, 1600)
        
        this.WallAni = new Laya.Animation()
        this.WallAni.loadAnimation("ani/WallAni.ani")
        this.addChild(this.WallAni)
        this.WallAni.pos(200, 1600)
        
        this.WaterLeftAni = new Laya.Animation()
        this.WaterLeftAni.loadAnimation("ani/WaterLeftAni.ani")
        this.addChild(this.WaterLeftAni)
        this.WaterLeftAni.pos(200, 1600)
        
        this.winAni = new Laya.Animation()
        this.winAni.loadAnimation("ani/winAni.ani")
        this.addChild(this.winAni)
        this.winAni.pos(200, 3000)
        
        this.WinManAni = new Laya.Animation()
        this.WinManAni.loadAnimation("ani/WinManAni.ani")
        this.addChild(this.WinManAni)
        this.WinManAni.pos(200, 1600)
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
                case "win":
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