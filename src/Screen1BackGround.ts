import GameConfig from "./GameConfig";
import Constants from "./Constants";

/**
 * 场景1背景
 */

type AniName = string;

export default class Screen1BackGround extends Laya.Sprite {
    private bg0: Laya.Animation;
    private bg1: Laya.Sprite;
    private cupAni: Laya.Animation
    private whistleAni: Laya.Animation
    private ShotAni: Laya.Animation
    private text2002Ani: Laya.Animation
    private text2004Ani: Laya.Animation
    private text2008Ani: Laya.Animation
    private text2012Ani: Laya.Animation
    private page2_start: Laya.Animation
    private page3_start: Laya.Animation
    private BallAni: Laya.Animation
    private BallManAni: Laya.Animation
    private BoardAni: Laya.Animation
    private clockAni: Laya.Animation
    // private ComputerAni: Laya.Animation
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
    // private ScoreboardAni: Laya.Animation
    private ShoesAni: Laya.Animation
    private StageAni: Laya.Animation
    private WallAni: Laya.Animation
    private WaterLeftAni: Laya.Animation
    // private WaterRightAni: Laya.Animation
    private WhistleAni: Laya.Animation
    private winAni: Laya.Animation
    private WinManAni: Laya.Animation

    private bg2: Laya.Sprite
    private bg3: Laya.Sprite
    private bg4: Laya.Sprite
    private bg5: Laya.Sprite

    private LBCH = Laya.Browser.clientHeight;

    constructor() {
        super();
        this.init()
    }
    init(): void {

        this.bg0 = new Laya.Animation()
        this.bg0.size(Constants.stageWidth, Constants.background0Height)
        const texture0 = this.bg0.loadAnimation("ani/first.ani")
        this.bg0.pos(256, 400)
        this.addChild(this.bg0)

        this.bg1 = new Laya.Sprite()
        this.bg1.pos(0, Constants.background0Height)
        this.bg1.size(Constants.stageWidth, Constants.background1Height)
        const texture = Laya.loader.getRes(Constants.background1)
        this.bg1.graphics.drawImage(texture)
        this.addChild(this.bg1)

        this.bg2 = new Laya.Sprite()
        this.bg2.pos(0, Constants.background1Height + 970)
        this.bg2.size(Constants.stageWidth, Constants.background2Height)
        const texture2 = Laya.loader.getRes(Constants.background2)
        this.bg2.graphics.drawImage(texture2)
        this.addChild(this.bg2)

        this.bg3 = new Laya.Sprite()
        this.bg3.pos(0, Constants.background1Height + Constants.background2Height + 1940)
        this.bg3.size(Constants.stageWidth, Constants.background3Height)
        const texture3 = Laya.loader.getRes(Constants.background3)
        this.bg3.graphics.drawImage(texture3)
        this.addChild(this.bg3)

        this.bg4 = new Laya.Sprite()
        this.bg4.pos(0, Constants.background1Height + Constants.background2Height + Constants.background3Height + 2910)
        this.bg4.size(Constants.stageWidth, Constants.background4Height)
        const texture4 = Laya.loader.getRes(Constants.background4)
        this.bg4.graphics.drawImage(texture4)
        this.addChild(this.bg4)

        this.bg5 = new Laya.Sprite()
        this.bg5.pos(0, Constants.background1Height + Constants.background2Height + Constants.background3Height + Constants.background4Height + 3880)
        this.bg5.size(Constants.stageWidth, Constants.background5Height)
        const texture5 = Laya.loader.getRes(Constants.background5)
        this.bg5.graphics.drawImage(texture5)
        this.addChild(this.bg5)

        this.cupAni = new Laya.Animation()
        this.cupAni.loadAnimation("ani/CupAni.ani")
        this.addChild(this.cupAni)
        this.cupAni.pos(400, 1020 + Constants.background1Height)

        this.whistleAni = new Laya.Animation()
        this.whistleAni.loadAnimation("ani/WhistleAni.ani")
        this.addChild(this.whistleAni)
        this.whistleAni.pos(100, 980 + Constants.background1Height)

        this.ShotAni = new Laya.Animation()
        this.ShotAni.loadAnimation("ani/ShotAni.ani")
        this.addChild(this.ShotAni)
        this.ShotAni.pos(220, 1850 + Constants.background1Height)

        this.text2002Ani = new Laya.Animation()
        this.text2002Ani.loadAnimation("ani/text2002Ani.ani")
        this.addChild(this.text2002Ani)
        this.text2002Ani.pos(360, 2600 + Constants.background1Height)

        this.winAni = new Laya.Animation()
        this.winAni.loadAnimation("ani/winAni.ani")
        this.addChild(this.winAni)
        this.winAni.pos(260, 3050 + Constants.background1Height)


        //page2
        this.page2_start = new Laya.Animation()
        this.page2_start.loadAnimation("ani/page2_start.ani")
        this.addChild(this.page2_start)
        this.page2_start.pos(250, 4880)

        this.dumbbellAni = new Laya.Animation()
        this.dumbbellAni.loadAnimation("ani/dumbbellAni.ani")
        this.addChild(this.dumbbellAni)
        this.dumbbellAni.pos(310, 5096)

        this.equipmentAni = new Laya.Animation()
        this.equipmentAni.loadAnimation("ani/equipmentAni.ani")
        this.addChild(this.equipmentAni)
        this.equipmentAni.pos(370, 5403)

        this.clockAni = new Laya.Animation()
        this.clockAni.loadAnimation("ani/clockAni.ani")
        this.addChild(this.clockAni)
        this.clockAni.pos(152, 5695)

        this.text2004Ani = new Laya.Animation()
        this.text2004Ani.loadAnimation("ani/text2004Ani.ani")
        this.addChild(this.text2004Ani)
        this.text2004Ani.pos(337, 6044)

        this.electricmanAni = new Laya.Animation()
        this.electricmanAni.loadAnimation("ani/electricmanAni.ani")
        this.addChild(this.electricmanAni)
        this.electricmanAni.pos(328, 6265)

        this.liuxiangAni = new Laya.Animation()
        this.liuxiangAni.loadAnimation("ani/liuxiangAni.ani")
        this.addChild(this.liuxiangAni)
        this.liuxiangAni.pos(263, 6750)


        //page3
        this.page3_start = new Laya.Animation()
        this.page3_start.loadAnimation("ani/page3_start.ani")
        this.addChild(this.page3_start)
        this.page3_start.pos(250, 8250)

        this.MedalAni = new Laya.Animation()
        this.MedalAni.loadAnimation("ani/MedalAni.ani")
        this.addChild(this.MedalAni)
        this.MedalAni.pos(333, 8900)

        this.StageAni = new Laya.Animation()
        this.StageAni.loadAnimation("ani/StageAni.ani")
        this.addChild(this.StageAni)
        this.StageAni.pos(219, 9211)

        this.text2008Ani = new Laya.Animation()
        this.text2008Ani.loadAnimation("ani/text2008Ani.ani")
        this.addChild(this.text2008Ani)
        this.text2008Ani.pos(231, 9693)

        this.CrowdAni = new Laya.Animation()
        this.CrowdAni.loadAnimation("ani/CrowdAni.ani")
        this.addChild(this.CrowdAni)
        this.CrowdAni.pos(270, 9985)


        //page4
        this.HeartAni = new Laya.Animation()
        this.HeartAni.loadAnimation("ani/HeartAni.ani")
        this.addChild(this.HeartAni)
        this.HeartAni.pos(181, 11331)

        this.text2012Ani = new Laya.Animation()
        this.text2012Ani.loadAnimation("ani/text2012Ani.ani")
        this.addChild(this.text2012Ani)
        this.text2012Ani.pos(259, 11705)

        // this.WaterRightAni = new Laya.Animation()
        // this.WaterRightAni.loadAnimation("ani/WaterRightAni.ani")
        // this.addChild(this.WaterRightAni)
        // this.WaterRightAni.pos(370, 9100)

        this.BoardAni = new Laya.Animation()
        this.BoardAni.loadAnimation("ani/BoardAni.ani")
        this.addChild(this.BoardAni)
        this.BoardAni.pos(257, 11922)

        this.WallAni = new Laya.Animation()
        this.WallAni.loadAnimation("ani/WallAni.ani")
        this.addChild(this.WallAni)
        this.WallAni.pos(275, 12190)

        this.GogglesAni = new Laya.Animation()
        this.GogglesAni.loadAnimation("ani/GogglesAni.ani")
        this.addChild(this.GogglesAni)
        this.GogglesAni.pos(355, 12634)

        this.WaterLeftAni = new Laya.Animation()
        this.WaterLeftAni.loadAnimation("ani/WaterLeftAni.ani")
        this.addChild(this.WaterLeftAni)
        this.WaterLeftAni.pos(163, 13007)

        this.WinManAni = new Laya.Animation()
        this.WinManAni.loadAnimation("ani/WinManAni.ani")
        this.addChild(this.WinManAni)
        this.WinManAni.pos(254, 13480)


        //page5
        // this.ScoreboardAni = new Laya.Animation()
        // this.ScoreboardAni.loadAnimation("ani/ScoreboardAni.ani")
        // this.addChild(this.ScoreboardAni)
        // this.ScoreboardAni.pos(257, 14961)

        this.BallAni = new Laya.Animation()
        this.BallAni.loadAnimation("ani/BallAni.ani")
        this.addChild(this.BallAni)
        this.BallAni.pos(127, 14961)

        this.ShoesAni = new Laya.Animation()
        this.ShoesAni.loadAnimation("ani/ShoesAni.ani")
        this.addChild(this.ShoesAni)
        this.ShoesAni.pos(338, 15649)

        this.HatAni = new Laya.Animation()
        this.HatAni.loadAnimation("ani/HatAni.ani")
        this.addChild(this.HatAni)
        this.HatAni.pos(185, 15923)

        this.BallManAni = new Laya.Animation()
        this.BallManAni.loadAnimation("ani/BallManAni.ani")
        this.addChild(this.BallManAni)
        this.BallManAni.pos(265, 16467)
    }
    moveAni(aniName: AniName, y: number): void {
        switch (aniName) {
            case "first":
                this.bg0.gotoAndStop(y);
                break;
            case "ballMan":
                this.BallManAni.gotoAndStop(y);
                break;
        }
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
                this.ShotAni.gotoAndStop(0);
                break
            case "page2_start":
                this.page2_start.gotoAndStop(0);
                break
            case "page2_start1":
                this.page2_start.gotoAndStop(1);
                break
            case "page3_start":
                this.page3_start.gotoAndStop(0);
                break
            case "page3_start1":
                this.page3_start.gotoAndStop(1);
                break
            case "text2002":
                this.text2002Ani.gotoAndStop(10);
                break;
            case "text2004":
                this.text2004Ani.gotoAndStop(10);
                break;
            case "text2008":
                this.text2008Ani.gotoAndStop(10);
                break;
            case "text2012":
                this.text2012Ani.gotoAndStop(10);
                break;
            case "ball":
                this.BallAni.gotoAndStop(0);
                break;
            case "ballMan":
                this.BallManAni.gotoAndStop(0);
                break;
            case "board":
                this.BoardAni.gotoAndStop(10);
                break;
            case "clock":
                this.clockAni.gotoAndStop(10);
                break;
            // case "computer":
            //     this.ComputerAni.gotoAndStop(30);
            //     break;
            case "dumbbell":
                this.dumbbellAni.gotoAndStop(0);
                break;
            case "electricman":
                this.electricmanAni.gotoAndStop(0);
                break;
            case "equipment":
                this.equipmentAni.gotoAndStop(10);
                break;
            case "goggles":
                this.GogglesAni.gotoAndStop(10);
                break;
            case "hat":
                this.HatAni.gotoAndStop(20);
                break;
            case "heart":
                this.HeartAni.gotoAndStop(0);
                break;
            case "medal":
                this.MedalAni.gotoAndStop(10);
                break;
            // case "scoreboard":
            //     this.ScoreboardAni.gotoAndStop(20);
            //     break;
            case "shoes":
                this.ShoesAni.gotoAndStop(20);
                break;
            case "stage":
                this.StageAni.gotoAndStop(10);
                break;
            case "wall":
                this.WallAni.gotoAndStop(10);
                break;
            case "waterLeft":
                this.WaterLeftAni.gotoAndStop(10);
                break;
            // case "waterRight":
            //     this.WaterRightAni.gotoAndStop(10);
            //     break;
            case "whistle":
                this.WhistleAni.gotoAndStop(0);
                break;
            case "win":
                this.winAni.gotoAndStop(0);
                break;
            case "liuxiang":
                this.liuxiangAni.gotoAndStop(1);
                break;
            case "liuxiang0":
                this.liuxiangAni.gotoAndStop(0);
                break;
            case "liuxiang1":
                this.liuxiangAni.gotoAndStop(30);
                break;
            case "crowd":
                this.CrowdAni.gotoAndStop(1);
                break;
            case "crowd0":
                this.CrowdAni.gotoAndStop(0);
                break;
            case "crowd1":
                this.CrowdAni.gotoAndStop(30);
                break;
            case "winMan":
                this.WinManAni.gotoAndStop(1);
                break;
            case "winMan0":
                this.WinManAni.gotoAndStop(0);
                break;
            case "winMan1":
                this.WinManAni.gotoAndStop(30);
                break;
        }
    }
    playAni(aniName: AniName) {
        switch (aniName) {
            case "first":
                this.bg0.play(204, false);
                break;
            case "cup":
                this.cupAni.play(0, false);
                break;
            case "whistle":
                this.whistleAni.play(0, false);
                break;
            case "shot":
                this.ShotAni.play(0, false);
                break
            case "text2002":
                this.text2002Ani.play(0, false);
                break;
            case "text2004":
                this.text2004Ani.play(0, false);
                break;
            case "text2008":
                this.text2008Ani.play(0, false);
                break;
            case "text2012":
                this.text2012Ani.play(0, false);
                break;
            case "ball":
                this.BallAni.play(1, false);
                break;
            case "ballMan":
                this.BallManAni.play(0, false);
                break;
            case "board":
                this.BoardAni.play(0, false);
                break;
            case "clock":
                this.clockAni.play(0, false);
                break;
            // case "computer":
            //     this.ComputerAni.play(0, false);
            //     break;
            case "crowd":
                this.CrowdAni.play(1, false);
                break;
            case "dumbbell":
                this.dumbbellAni.play(0, false);
                break;
            case "electricman":
                this.electricmanAni.play(0, false);
                break;
            case "equipment":
                this.equipmentAni.play(0, false);
                break;
            case "goggles":
                this.GogglesAni.play(0, false);
                break;
            case "hat":
                this.HatAni.play(0, false);
                break;
            case "heart":
                this.HeartAni.play(1, false);
                break;
            case "liuxiang":
                this.liuxiangAni.play(1, false);
                break;
            case "medal":
                this.MedalAni.play(0, false);
                break;
            // case "scoreboard":
            //     this.ScoreboardAni.play(0, false);
            //     break;
            case "shoes":
                this.ShoesAni.play(0, false);
                break;
            case "stage":
                this.StageAni.play(0, false);
                break;
            case "wall":
                this.WallAni.play(0, false);
                break;
            case "waterLeft":
                this.WaterLeftAni.play(0, false);
                break;
            // case "waterRight":
            //     this.WaterRightAni.play(0, false);
            //     break;
            case "whistle":
                this.WhistleAni.play(0, false);
                break;
            case "win":
                this.winAni.play(1, false);
                break;
            case "winMan":
                this.WinManAni.play(0, false);
                break;
        }
    }
    isAniPlaying(aniName: AniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.isPlaying;
            case "whistle":
                return this.whistleAni.isPlaying;
            case "shot":
                return this.ShotAni.isPlaying;
            case "text2002":
                return this.text2002Ani.isPlaying;
            case "text2004":
                return this.text2004Ani.isPlaying;
            case "text2008":
                return this.text2008Ani.isPlaying;
            case "text2012":
                return this.text2012Ani.isPlaying;
            case "ball":
                return this.BallAni.isPlaying;
            case "ballMan":
                return this.BallManAni.isPlaying;
            case "board":
                return this.BoardAni.isPlaying;
            case "clock":
                return this.clockAni.isPlaying;
            // case "computer":
            //     return this.ComputerAni.isPlaying;
            case "crowd":
                return this.CrowdAni.isPlaying;
            case "dumbbell":
                return this.dumbbellAni.isPlaying;
            case "electricman":
                return this.electricmanAni.isPlaying;
            case "equipment":
                return this.equipmentAni.isPlaying;
            case "goggles":
                return this.GogglesAni.isPlaying;
            case "hat":
                return this.HatAni.isPlaying;
            case "heart":
                return this.HeartAni.isPlaying;
            case "liuxiang":
                return this.liuxiangAni.isPlaying;
            case "medal":
                return this.MedalAni.isPlaying;
            // case "scoreboard":
            //     return this.ScoreboardAni.isPlaying;
            case "shoes":
                return this.ShoesAni.isPlaying;
            case "stage":
                return this.StageAni.isPlaying;
            case "wall":
                return this.WallAni.isPlaying;
            case "waterLeft":
                return this.WaterLeftAni.isPlaying;
            // case "waterRight":
            //     return this.WaterRightAni.isPlaying;
            case "whistle":
                return this.WhistleAni.isPlaying;
            case "win":
                return this.winAni.isPlaying;
            case "winMan":
                return this.WinManAni.isPlaying;
        }
    }
    setAniVisible(aniName: AniName, visible: boolean) {
        switch (aniName) {
            case "cup":
                this.cupAni.visible = visible;
                break
            case "whistle":
                this.whistleAni.visible = visible;
                break
            case "shot":
                this.ShotAni.visible = visible;
                break
            case "text2002":
                this.text2002Ani.visible = visible;
                break;
            case "text2004":
                this.text2004Ani.visible = visible;
                break;
            case "text2008":
                this.text2008Ani.visible = visible;
                break;
            case "text2012":
                this.text2012Ani.visible = visible;
                break;
            case "ball":
                this.BallAni.visible = visible;
                break;
            case "ballMan":
                this.BallManAni.visible = visible;
                break;
            case "board":
                this.BoardAni.visible = visible;
                break;
            case "clock":
                this.clockAni.visible = visible;
                break;
            // case "computer":
            //     this.ComputerAni.visible = visible;
            //     break;
            case "crowd":
                this.CrowdAni.visible = visible;
                break;
            case "dumbbell":
                this.dumbbellAni.visible = visible;
                break;
            case "electricman":
                this.electricmanAni.visible = visible;
                break;
            case "equipment":
                this.equipmentAni.visible = visible;
                break;
            case "goggles":
                this.GogglesAni.visible = visible;
                break;
            case "hat":
                this.HatAni.visible = visible;
                break;
            case "heart":
                this.HeartAni.visible = visible;
                break;
            case "liuxiang":
                this.liuxiangAni.visible = visible;
                break;
            case "medal":
                this.MedalAni.visible = visible;
                break;
            // case "scoreboard":
            //     this.ScoreboardAni.visible = visible;
            //     break;
            case "shoes":
                this.ShoesAni.visible = visible;
                break;
            case "stage":
                this.StageAni.visible = visible;
                break;
            case "wall":
                this.WallAni.visible = visible;
                break;
            case "waterLeft":
                this.WaterLeftAni.visible = visible;
                break;
            // case "waterRight":
            //     this.WaterRightAni.visible = visible;
            //     break;
            case "whistle":
                this.WhistleAni.visible = visible;
                break;
            case "win":
                this.winAni.visible = visible;
                break;
            case "winMan":
                this.WinManAni.visible = visible;
                break;
        }
    }
    isAniVisible(aniName: AniName) {
        switch (aniName) {
            case "cup":
                return this.cupAni.visible;
            case "whistle":
                return this.whistleAni.visible;
            case "shot":
                return this.ShotAni.visible;
            case "text2002":
                return this.text2002Ani.visible;
            case "text2004":
                return this.text2004Ani.visible;
            case "text2008":
                return this.text2008Ani.visible;
            case "text2012":
                return this.text2012Ani.visible;
            case "ball":
                return this.BallAni.visible;
            case "ballMan":
                return this.BallManAni.visible;
            case "board":
                return this.BoardAni.visible;
            case "clock":
                return this.clockAni.visible;
            // case "computer":
            //     return this.ComputerAni.visible;
            case "crowd":
                return this.CrowdAni.visible;
            case "dumbbell":
                return this.dumbbellAni.visible;
            case "electricman":
                return this.electricmanAni.visible;
            case "equipment":
                return this.equipmentAni.visible;
            case "goggles":
                return this.GogglesAni.visible;
            case "hat":
                return this.HatAni.visible;
            case "heart":
                return this.HeartAni.visible;
            case "liuxiang":
                return this.liuxiangAni.visible;
            case "medal":
                return this.MedalAni.visible;
            // case "scoreboard":
            //     return this.ScoreboardAni.visible;
            case "shoes":
                return this.ShoesAni.visible;
            case "stage":
                return this.StageAni.visible;
            case "wall":
                return this.WallAni.visible;
            case "waterLeft":
                return this.WaterLeftAni.visible;
            // case "waterRight":
            //     return this.WaterRightAni.visible;
            case "whistle":
                return this.WhistleAni.visible;
            case "win":
                return this.winAni.visible;
            case "winMan":
                return this.WinManAni.visible;


        }
    }



}