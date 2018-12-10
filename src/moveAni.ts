export default class moveAni extends Laya.Sprite {
    // 定义主体
    private bodyAni: Laya.Animation
  

    constructor() {
        super()
        this.init()
    }

    init(): void {
        if('run1'){
            this.bodyAni = new Laya.Animation()
            this.bodyAni.loadAnimation("ani/runningAni.ani")
            this.addChild(this.bodyAni)
        }
        if('jump'){
            this.bodyAni = new Laya.Animation()
            this.bodyAni.loadAnimation("ani/jumpingAni.ani")
            this.addChild(this.bodyAni)
        }
        if('run2'){
            this.bodyAni = new Laya.Animation()
            this.bodyAni.loadAnimation("ani/runningAni.ani")
            this.addChild(this.bodyAni)
        }
        if('swim1'){
            this.bodyAni = new Laya.Animation()
            this.bodyAni.loadAnimation("ani/swimming.ani")
            this.addChild(this.bodyAni)
        }
        if('swim2'){
            this.bodyAni = new Laya.Animation()
            this.bodyAni.loadAnimation("ani/swimming2.ani")
            this.addChild(this.bodyAni)
        }
    }

    show(): void {
        this.bodyAni.visible = true
       
    }

    hide(): void {
        this.bodyAni.visible = false
    }

}