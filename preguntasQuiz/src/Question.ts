export class Question {
    constructor(public text: string, public answer: string, public options: string[]) {
        this.text = text;
        this.answer = answer;
        this.options = options;
    }

    checkAnswer(userAnswer: string): boolean {
        // Buscar la respuesta correcta en las opciones de respuesta
        const correctAnswer = (this.options.find(option => option.toLowerCase() === this.answer.toLowerCase()))?.toLowerCase();
        return correctAnswer === userAnswer.toLowerCase();
    }
}