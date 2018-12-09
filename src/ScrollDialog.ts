import { ui } from "./ui/layaMaxUI";

export type TipType = "scroll" | "click_white" | "click_black"
export default class ScrollDialog extends ui.dialog.ScrollDialogUI {
    private tipType: TipType
    constructor(tipType: TipType) {
        super()
        this.tipType = tipType
        this.autoDestroyAtClosed = true
        this.isPopupCenter = false
        this.pos(0, 0)

    }

    public onOpened() {
        Laya.timer.once(200, this, this.onCallLater)
    }

    private onCallLater() {
        switch(this.tipType) {
            case "scroll": {
                if (!this.tipImage) {
                    Laya.timer.once(200, this, this.onCallLater)
                    return 
                }
                this.tipImage.y = Laya.Browser.clientHeight 
                this.tipImage.visible  = true
                break;
            }
            case "click_white": {
                if (!this.whiteClickImage) {
                    Laya.timer.once(200, this, this.onCallLater)
                    return 
                }
                this.whiteClickImage.y = Laya.Browser.clientHeight 
                this.whiteClickImage.visible = true
                break
            }
            case "click_black": {
                if (!this.blackClickImage) {
                    Laya.timer.once(200, this, this.onCallLater)
                    return
                }
                this.blackClickImage.y = Laya.Browser.clientHeight
                this.blackClickImage.visible = true
            }
        }
        this.on(Laya.Event.MOUSE_DOWN, this, this.onClick)
    }


    private onClick() {
        this.close()
    }
}