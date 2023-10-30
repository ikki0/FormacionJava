'use strict';
import { Question } from "./Question.js";
import { Quiz } from "./Quiz.js";

/* Correct answers
    1- El Nilo
    2 - Gabriel García Márquez
    3 - Júpiter
    4 -  1789
    5: - Au 
    6 - Newton
    7. Ley de Newton del movimiento
    8 - 299,792,458 metros por segundo
*/

const quizData = [
    {
        question: "¿Cuál es el río más largo del mundo?",
        answer: "A. El Nilo",
        options: ["A. El Nilo", "B. El Amazonas", "C. El Yangtsé", "D. El Misisipi"],
    },
    {
        question: "¿Quién escribió la obra 'Cien años de soledad'?",
        answer: "A. Gabriel García Márquez",
        options: ["A. Gabriel García Márquez", "B. Pablo Neruda", "C. Mario Vargas Llosa", "D. Carlos Fuentes"],
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?", 
        answer: "C. Júpiter",
        options: ["A. Marte", "B. Saturno", "C. Júpiter", "D. Urano"],
    },
    {
        question: "¿En qué año llegó Cristóbal Colón a América?",
        answer: "D. 1492",
        options: ["A. 1490", "B. 1491", "C. 1493", "D. 1492"],
    },
    {
        question: "¿Cuál es el símbolo químico del oro?",
        answer: "B. Au",
        options: ["A. O", "B. Au", "C. Or", "D. Ot"],
    },
    {
        question: "¿En qué año se llevó a cabo la Revolución Francesa?",
        answer: "D. 1789",
        options: ["A. 1787", "B. 1788", "C. 1790", "D. 1789"],
    },
    {
        question: "¿Quién descubrió la ley de la gravitación universal?",
        answer: "B. Newton",
        options: ["A. Einstein", "B. Newton", "C. Galileo", "D. Kepler"],
    },
    {
        question: "¿Cuál de las siguientes unidades se utiliza para medir la fuerza en el Sistema Internacional de Unidades (SI)?",
        answer: "A. Newton",
        options: ["A. Newton", "B. Watt", "C. Joule", "D. Pascal"],
    },
    {
        question: "¿Qué ley de la física establece que 'a toda acción le corresponde una reacción igual y opuesta'?",
        answer: "C. Ley de Newton del movimiento",
        options: ["A. Ley de Ohm", "B. Ley de Coulomb", "C. Ley de Newton del movimiento", "D. Ley de Faraday"],
    },
    {
        question: "¿Cuál es la velocidad de la luz en el vacío?",
        answer: "A. 299,792,458 metros por segundo",
        options: ["A. 299,792,458 metros por segundo", "B. 100 metros por segundo", "C. 3,000 kilómetros por hora", "D. 1,000 millas por segundo"],
    }
    
];

const pPageNumber = document.querySelector('.question-page') as HTMLParagraphElement;
const questions: Question[] = quizData.map(data => new Question(data.question, data.answer, data.options));
const cards: HTMLDivElement[] = Array.from(document.querySelectorAll('.card'));
const pEstatistics : HTMLDivElement | null = document.querySelector('.estadisticas') ;
const nSuccess : HTMLElement | null = document.querySelector('.nSuccess');
const nFail : HTMLElement | null = document.querySelector('.nFail');

const quiz = new Quiz(questions, cards);
let success = 0;
let fail = 0;

quiz.setPageNumber(pPageNumber);
quiz.showQuestion();

function handleAnswerClick(answerText: string) {
    const isCorrect = quiz.checkAnswer(answerText);
    isCorrect === true ? success++ : fail++;
    quiz.setLocalStorage(success, fail);

    if (isCorrect) {
        alert("¡Respuesta correcta!");
    } else {
        alert("Respuesta incorrecta. La respuesta correcta es: " + questions[quiz.currentQuestionIndex - 1].answer);
    }
    quiz.showQuestion();
    quiz.setPageNumber(pPageNumber);
    
    if (pPageNumber.textContent === ""){
        showResults();
        removeLocalStorage();
    }
}

function removeLocalStorage(): void{
    console.log('aqui');
    localStorage.clear();
}

function showResults(){
    pEstatistics?.classList.remove('hidden');
    
    if (nSuccess) {
        nSuccess.innerText = `Aciertos: ${quiz.getSuccess()}`
    }

    if (nFail) {
        nFail.innerText=`Fallos: ${quiz.getFail()}`;
    }
}

for (const answer of cards) {
    answer.addEventListener('click', () => {
        const userAnswer = answer.textContent?.trim() || '';
        handleAnswerClick(userAnswer);
    });
}


