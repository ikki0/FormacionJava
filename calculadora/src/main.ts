'use strict';
// Agregar funcionalidad teclear numeros o operador con el teclado
const botones : NodeListOf<HTMLElement> = document.querySelectorAll('.btn' );
const operators : NodeListOf<HTMLElement>  = document.querySelectorAll('.operators') ;
const btn1 : HTMLElement | null = document.querySelector('.btn-1') ;
const btn2 : HTMLElement | null = document.querySelector('.btn-2');
const btn3 : HTMLElement | null = document.querySelector('.btn-3');
const btn4 : HTMLElement | null = document.querySelector('.btn-4');
const btn5 : HTMLElement | null = document.querySelector('.btn-5');
const btn6 : HTMLElement | null = document.querySelector('.btn-6');
const btn7 : HTMLElement | null = document.querySelector('.btn-7');
const btn8 : HTMLElement | null = document.querySelector('.btn-8');
const btn9 : HTMLElement | null = document.querySelector('.btn-9');
const btnRemove : HTMLElement | null = document.querySelector('.btn-c');
const btnLeftParenthesis : HTMLElement | null = document.querySelector('.btn-l-parenthesis');
const btnRightParenthesis : HTMLElement | null = document.querySelector('.btn-r-parenthesis');
const btnDivisor : HTMLElement | null = document.querySelector('.btn-divisor');
const btnMultiply : HTMLElement | null = document.querySelector('.btn-multiply');
const btnRest : HTMLElement | null = document.querySelector('.btn-rest');
const btnAdd : HTMLElement | null = document.querySelector('.btn-add');
const btnEqual : HTMLElement | null = document.querySelector('.btn-equal');
const dCurrentHour : HTMLElement | null = document.querySelector('.d-current-hour');
const dResult : HTMLElement | null = document.querySelector('.d-result');
const dInfoOperators : HTMLElement | null = document.querySelector('.d-info-operators');
const btnDot : HTMLElement | null = document.querySelector('.btn-dot');

let arrayGroup1 : string[] = [];
let arrayGroup2 : string[] = [];
let boolOperator : boolean = false;
let currentOperator : string = '';
let result : any = 0

// calcular hora actual y imprimir en la hora del sistema
const currentData = new Date();
let hour = currentData.getHours();
let min = currentData.getMinutes();

if (dCurrentHour) {
    dCurrentHour.innerHTML=`${hour}:${min}`
}

function modifyArrayGroup1() : void {
        if (result === null) {
            result = 0;
        }
        arrayGroup1 = [result];
}

function addNumbersToArray(){
    for (const btn of botones) {
        btn.addEventListener('click', function () {
            // solo podemos introducir un único punto en cada arraygroup
            if (!boolOperator) {
                if (btn.innerText === '.') {
                    if (!arrayGroup1.includes('.')) {
                        arrayGroup1.push(btn.innerText);
                    }
                } else {
                    arrayGroup1.push(btn.innerText);
                }
             
            } else {
                if (btn.innerText === '.') {
                    if (!arrayGroup2.includes('.')) {
                        arrayGroup2.push(btn.innerText);
                    }
                } else {
                    arrayGroup2.push(btn.innerText);
                }
            }
            showInfoOperators();
        })
    }
}

for (const operator of operators) {
    operator.addEventListener('click' , function(){
        if (arrayGroup1.length === 0){
            modifyArrayGroup1();
            currentOperator = operator.innerText;
            boolOperator = true;
            showInfoOperators();
        }else {
            currentOperator = operator.innerText;
            boolOperator = true;
            showInfoOperators();
        }

    });
}

function softResetValues() : void {
    arrayGroup1 = [];
    arrayGroup2 = [];
    boolOperator = false;
    currentOperator = '';
}

function resetValues() : void {
    arrayGroup1 = [];
    arrayGroup2 = [];
    boolOperator = false;
    currentOperator = '';
    result = 0;
    showInfoOperators();
    showResult();
}

function showResult() : void{
    if (dResult) {
        dResult.textContent = `${result  === null ? 'No es posible dividir por 0' : result}`
    } 
}


function showInfoOperators() : void {
    const numberGroup1 :  string = arrayGroup1.length ? arrayGroup1.join('') : '';
    const numberGroup2 : string = arrayGroup2.length ? arrayGroup2.join('') : '';

    // show in order on dInfoOperators
    if (dInfoOperators) {
        dInfoOperators.textContent = `${numberGroup1} ${currentOperator} ${numberGroup2}`;
    }
}

// show result of operator on dResult
btnEqual?.addEventListener('click', function(){
    const numberGroup1 = Number(arrayGroup1.join(''));
    const numberGroup2 = Number(arrayGroup2.join(''));

    type OperatorTemplate = {
        [key: string]: () => void;
      };
      result

    const operatorTemplate : OperatorTemplate  = {
        '+' : function(){
            result = (numberGroup1 + numberGroup2).toFixed(2);
        },
        '-' : function() {
            result = (numberGroup1 - numberGroup2).toFixed(2);
        },
        'x': function() {
            result = (numberGroup1 * numberGroup2).toFixed(2);
        },
        '/': function() {
            // check if numberGroup2 is 0
            if (numberGroup2 === 0) {
               result = null;
            }  else {
                result = (numberGroup1 / numberGroup2).toFixed(3);
            }
        },
        '' : function() {
            result = numberGroup1;
        }
    };
    
    operatorTemplate[currentOperator]();
    boolOperator = false;
    showResult();
    // Una vez mostrado el resultado, arrayGroup1 y arrayGroup2 volveran a su estado inicial, pero aún se mostrará en la interfaz los datos
    softResetValues();
});

// Volver al estado inicial de arrayGroup1 , arrayGroup2 , currentOperator, dResult
// Mostrar nuevamente dInfoOperators y dResult
btnRemove?.addEventListener('click', resetValues);

addNumbersToArray();


// Corregir cuando presionas un botón y click a igual, debe mostrar únicamente el primer grupo