import { ui } from "./ui/layaMaxUI";
export default class LoadingDialog extends ui.dialog.LoadingDialogUI {
    private progress = 0

    constructor() {
        super()
        this.autoDestroyAtClosed = true
        this.isPopupCenter = false
        this.pos(0, (Laya.Browser.clientHeight - 200)/2)
    }

    onOpened() {
        // this.changeProgressValue(0)
    }

    public changeProgressValue(progress: number) {
        this.progress = progress
        if (this.loadingProgressBar) {
            this.loadingProgressBar.value = progress
        }
        
    }

    public updateTip(tip: string) {
        this.tipLabel.text = tip
    }
}