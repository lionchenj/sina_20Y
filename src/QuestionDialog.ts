import { ui } from "./ui/layaMaxUI";
import { QuestionItem } from "./QuestionData";


export class QuestionDialog extends ui.dialog.QuestionDialogUI {

    private question: QuestionItem
    
    constructor(question: QuestionItem) {
        super()
        this.question = question

        this.isPopupCenter = false
        this.isModal = true
        this.pos(0, 0)
        
        this.popup(true)
    }   
    
    public onOpened() {
        const question = this.question
        this.questionLabel.text = question.title
        this.answerABtn.label = question.a
        this.answerBBtn.label = question.b
        this.answerCBtn.label = question.c
        this.answerDBtn.label = question.d

        this.answerABtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["a"])
        this.answerBBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["b"])
        this.answerCBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["c"])
        this.answerDBtn.clickHandler = Laya.Handler.create(this, this.onClickAnswer, ["d"])
    }

    private onClickAnswer(answer: string) {
        console.log("onClickAnswer", answer)

        const right = (this.question.answer === answer)
        const resultImg = right ? "view/right.png" : "view/wrong.png"
        if (answer === "a") {
            this.resultAImg.loadImage(resultImg)
            this.resultAImg.visible = true
        } else if (answer === "b") {
            this.resultBImg.loadImage(resultImg)
            this.resultBImg.visible = true
        } else if (answer === "c") {
            this.resultCImg.loadImage(resultImg)
            this.resultCImg.visible = true
        } else if (answer === "d") {
            this.resultDImg.loadImage(resultImg)
            this.resultDImg.visible = true
        }

        // 移除点击事件
        this.answerABtn.offAll()
        this.answerBBtn.offAll()
        this.answerCBtn.offAll()
        this.answerDBtn.offAll()

        Laya.timer.once(1000, this, this.onCloseLater, [right], true)
    }

    private onCloseLater(right: boolean) {
        this.close(`${right}`)
    }
}