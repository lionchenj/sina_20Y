export default class page2e3s extends Laya.Sprite {
    // 定义球主体
    private bodyAni: Laya.Animation
  

    constructor() {
        super()
        this.init()
    }

    init(): void {
            
        this.bodyAni = new Laya.Animation()
        this.bodyAni.loadAnimation("ani/page2to3Ani.ani")
        this.addChild(this.bodyAni)
        
    }

    /**
     * 走动
     */
    goPath(y:number): void {
        this.bodyAni.gotoAndStop(y)
    }

    show(): void {
        this.bodyAni.visible = true
       
    }

    hide(): void {
        this.bodyAni.visible = false
    }

}