'use strict';
// Agregar funcionalidad teclear numeros o operador con el teclado
const botones = document.querySelectorAll('.btn');
const operators = document.querySelectorAll('.operators');
const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const btn4 = document.querySelector('.btn-4');
const btn5 = document.querySelector('.btn-5');
const btn6 = document.querySelector('.btn-6');
const btn7 = document.querySelector('.btn-7');
const btn8 = document.querySelector('.btn-8');
const btn9 = document.querySelector('.btn-9');
const btnRemove = document.querySelector('.btn-c');
const btnLeftParenthesis = document.querySelector('.btn-l-parenthesis');
const btnRightParenthesis = document.querySelector('.btn-r-parenthesis');
const btnDivisor = document.querySelector('.btn-divisor');
const btnMultiply = document.querySelector('.btn-multiply');
const btnRest = document.querySelector('.btn-rest');
const btnAdd = document.querySelector('.btn-add');
const btnEqual = document.querySelector('.btn-equal');
const dCurrentHour = document.querySelector('.d-current-hour');
const dResult = document.querySelector('.d-result');
const dInfoOperators = document.querySelector('.d-info-operators');
const btnDot = document.querySelector('.btn-dot');
let arrayGroup1 = [];
let arrayGroup2 = [];
let boolOperator = false;
let currentOperator = '';
let result = 0;
// calcular hora actual y imprimir en la hora del sistema
const currentData = new Date();
let hour = currentData.getHours();
let min = currentData.getMinutes();
if (dCurrentHour) {
    dCurrentHour.innerHTML = `${hour}:${min}`;
}
function modifyArrayGroup1() {
    if (result === null) {
        result = 0;
    }
    arrayGroup1 = [result];
}
function addNumbersToArray() {
    for (const btn of botones) {
        btn.addEventListener('click', function () {
            // solo podemos introducir un único punto en cada arraygroup
            if (!boolOperator) {
                if (btn.innerText === '.') {
                    if (!arrayGroup1.includes('.')) {
                        arrayGroup1.push(btn.innerText);
                    }
                }
                else {
                    arrayGroup1.push(btn.innerText);
                }
            }
            else {
                if (btn.innerText === '.') {
                    if (!arrayGroup2.includes('.')) {
                        arrayGroup2.push(btn.innerText);
                    }
                }
                else {
                    arrayGroup2.push(btn.innerText);
                }
            }
            showInfoOperators();
        });
    }
}
for (const operator of operators) {
    operator.addEventListener('click', function () {
        if (arrayGroup1.length === 0) {
            modifyArrayGroup1();
            currentOperator = operator.innerText;
            boolOperator = true;
            showInfoOperators();
        }
        else {
            currentOperator = operator.innerText;
            boolOperator = true;
            showInfoOperators();
        }
    });
}
function softResetValues() {
    arrayGroup1 = [];
    arrayGroup2 = [];
    boolOperator = false;
    currentOperator = '';
}
function resetValues() {
    arrayGroup1 = [];
    arrayGroup2 = [];
    boolOperator = false;
    currentOperator = '';
    result = 0;
    showInfoOperators();
    showResult();
}
function showResult() {
    if (dResult) {
        dResult.textContent = `${result === null ? 'No es posible dividir por 0' : result}`;
    }
}
function showInfoOperators() {
    const numberGroup1 = arrayGroup1.length ? arrayGroup1.join('') : '';
    const numberGroup2 = arrayGroup2.length ? arrayGroup2.join('') : '';
    // show in order on dInfoOperators
    if (dInfoOperators) {
        dInfoOperators.textContent = `${numberGroup1} ${currentOperator} ${numberGroup2}`;
    }
}
// show result of operator on dResult
btnEqual?.addEventListener('click', function () {
    const numberGroup1 = Number(arrayGroup1.join(''));
    const numberGroup2 = Number(arrayGroup2.join(''));
    result;
    const operatorTemplate = {
        '+': function () {
            result = (numberGroup1 + numberGroup2).toFixed(2);
        },
        '-': function () {
            result = (numberGroup1 - numberGroup2).toFixed(2);
        },
        'x': function () {
            result = (numberGroup1 * numberGroup2).toFixed(2);
        },
        '/': function () {
            // check if numberGroup2 is 0
            if (numberGroup2 === 0) {
                result = null;
            }
            else {
                result = (numberGroup1 / numberGroup2).toFixed(3);
            }
        },
        '': function () {
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
