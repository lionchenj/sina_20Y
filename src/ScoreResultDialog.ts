import { ui } from "./ui/layaMaxUI";
import Constants from "./Constants";

export default class ScoreResultDialog extends ui.dialog.ResultDialogUI {
    private score: number
    private isClicking: boolean
    constructor(score: number) {
        super()
        this.isClicking = false
        this.autoDestroyAtClosed = true
        this.isPopupCenter = false
        this.pos(0, 0)
        this.score = score
    }

    public onOpened() {
        // 延时执行，避免手机上执行时报组件undefined的问题
        Laya.timer.once(200, this, this.onCallLater)
    }

    private onCallLater() {
        if (!this.bgImageView) {
            Laya.timer.once(200, this, this.onCallLater)
            return 
        }
        this.scoreImageView.loadImage(`view/num_${this.score}.png`)
        if (this.score >= 8) {
            this.bgImageView.loadImage(Constants.score4)
        } else if (this.score >= 5) {
            this.bgImageView.loadImage(Constants.score3)
        } else if (this.score >= 2) {
            this.bgImageView.loadImage(Constants.score2)
        } else {
            this.bgImageView.loadImage(Constants.score1)
        }
        this.scoreImageView.visible = true
        this.username.visible = true
        this.bgImageView.visible = true
        this.onceMoreButton.on(Laya.Event.CLICK, this, this.onOnceMore)
        this.shareButton.on(Laya.Event.CLICK, this, this.onShare)
        this.on(Laya.Event.MOUSE_DOWN, this, this.onDown)
        this.on(Laya.Event.MOUSE_UP, this, this.onUp)
    }

    private onOnceMore() {
        console.log("ScoreResultDialog", "clicked once more button")
        window.location.reload()
    }
    private onShare() {
        console.log("ScoreResultDialog", "clicked on share")
    }

    private onDown() {
        this.isClicking = true
        Laya.timer.once(1000, this, this.onLongDownCheck) // 1秒算长按
    }

    private onUp() {
        this.isClicking = false
    }

    private onLongDownCheck() {
        if (!this.isClicking) { // 不算长按
            return 
        }
        console.log("ScoreResultDialog", "long click")
        const htmlCanvas = this.bgImageView.drawToCanvas(512, 808, 0, 0)
        htmlCanvas.toBase64("image/jpeg",0.9, this.onBgToBase64);
    }

    private onBgToBase64(res) {
        console.log("ScoreResultDialog", "onBgToBase64", res)
    }
}