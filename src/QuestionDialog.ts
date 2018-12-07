import { ui } from "./ui/layaMaxUI";


export class QuestionDialog extends ui.dialog.QuestionDialogUI {
    private tip: Laya.TipManager = new Laya.TipManager()
    constructor() {
        super()
        this.isPopupCenter = false
    }
    showInPos(x: number, y: number) {
        this.pos(x, y)
        this.show()
    }
}