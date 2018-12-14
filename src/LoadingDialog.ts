import { ui } from "./ui/layaMaxUI";
export default class LoadingDialog extends ui.dialog.LoadingDialogUI {
    // private progress = '0'

    constructor() {
        super()
        this.autoDestroyAtClosed = true
        this.isPopupCenter = false
        this.pos(0, 0)
    }

    onOpened() {
        // this.changeProgressValue(0)       
    }

    public changeProgressValue(nber: number) {
        if (!this.progress) {
            Laya.timer.once(200, this, this.changeProgressValue)
            return
        }
        const num = Math.ceil(nber * 100) + "%"
        console.log(num)
        this.progress.text = num;
        if (nber == 1) {
            this.showText.play(0, false);
            setTimeout(() => {
                this.loadBtn.visible = true;
            }, 1500);
            this.on(Laya.Event.MOUSE_DOWN, this, this.onClick);
        }
    }

    public updateTip(tip: string) {
        this.progress.text = tip
    }


    private onClick() {
        this.close()
    }
}