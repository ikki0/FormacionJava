export class Question {
    text;
    answer;
    options;
    constructor(text, answer, options) {
        this.text = text;
        this.answer = answer;
        this.options = options;
        this.text = text;
        this.answer = answer;
        this.options = options;
    }
    checkAnswer(userAnswer) {
        // Buscar la respuesta correcta en las opciones de respuesta
        const correctAnswer = (this.options.find(option => option.toLowerCase() === this.answer.toLowerCase()))?.toLowerCase();
        return correctAnswer === userAnswer.toLowerCase();
    }
}
