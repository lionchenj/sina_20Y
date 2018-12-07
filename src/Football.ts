export default class Football extends Laya.Sprite {
    // 定义足球主体
    private bodyAni: Laya.Animation
  

    constructor() {
        super()
        this.init()
    }

    init(): void {
            
        this.bodyAni = new Laya.Animation()
        this.bodyAni.loadAnimation("ani/FootballAni.ani")
        this.addChild(this.bodyAni)
        
    }

    /**
     * 足球停止旋转
     */
    stopRotate(): void {
        if (!this.bodyAni.isPlaying){
            return 
        }
        this.bodyAni.gotoAndStop(0)
    }

    /**
     * 足球旋转
     */
    playRotate(): void {
        if (this.bodyAni.isPlaying) {
            return 
        }
        this.bodyAni.play(0, true)

    }

    show(): void {
        this.bodyAni.visible = true
       
    }

    hide(): void {
        this.bodyAni.visible = false
    }

}