export class Answer {
    text;
    constructor(text) {
        this.text = text;
        this.text = text;
    }
    checkAnswer(userAnswer) {
        return userAnswer.toLowerCase() === this.text.toLowerCase();
    }
}
