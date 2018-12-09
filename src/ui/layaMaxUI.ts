/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import View=Laya.View;
import Dialog=Laya.Dialog;
import Scene=Laya.Scene;
export module ui.dialog {
    export class LoadingDialogUI extends Dialog {
		public tipLabel:Laya.Label;
		public loadingProgressBar:Laya.ProgressBar;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("dialog/LoadingDialog");
        }
    }
    export class QuestionDialogUI extends Dialog {
		public resultAImg:Laya.Sprite;
		public resultCImg:Laya.Sprite;
		public resultBImg:Laya.Sprite;
		public resultDImg:Laya.Sprite;
		public questionLabel:Laya.Label;
		public answerABtn:Laya.Button;
		public answerBBtn:Laya.Button;
		public answerCBtn:Laya.Button;
		public answerDBtn:Laya.Button;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("dialog/QuestionDialog");
        }
    }
    export class ScrollDialogUI extends Dialog {
		public tipImage:Laya.Sprite;
		public blackClickImage:Laya.Sprite;
		public whiteClickImage:Laya.Sprite;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("dialog/ScrollDialog");
        }
    }
    export class ShakeDialogUI extends Dialog {
		public box:Laya.Box;
        constructor(){ super()}
        createChildren():void {
            super.createChildren();
            this.loadScene("dialog/ShakeDialog");
        }
    }
}