import { ui } from "./ui/layaMaxUI";

export default class ShakeDialog extends ui.dialog.ShakeDialogUI {
    constructor() {
        super()
        this.autoDestroyAtClosed = true
        this.isPopupCenter = false
        this.pos(0, 0)
      
        
    }    



}