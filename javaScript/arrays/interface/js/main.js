'use strict';

// to add
const btnPush = document.querySelector('.btn-push');
const btnUnshift = document.querySelector('.btn-unshift');
const btnInsertAt = document.querySelector('.btn-insert-at');
const inpAddNumber = document.querySelector('#addNumber');

// to remove
const btnPop = document.querySelector('.btn-pop');
const btnShift = document.querySelector('.btn-shift');
const btnRemoveAt = document.querySelector('.btn-remove-at');
const inpRemoveNumber = document.querySelector('#removeNumber');

// section to write result
const result = document.querySelector('.result');

const arrayInicial = [];
const arrayEmotes = ['😀', '😄', '😆', '🥵', '😅', '😇', '🥰', '🫣', '🤗', '🤑'];

function chooseRandom() {
    let arrayLenght = arrayEmotes.length;
    let numberRandom = Math.round(Math.random() * 9);
    return arrayEmotes[numberRandom];
}

function showArray() {
    result.innerHTML = `<p>[${arrayInicial}]</p>`;
}

// función push
btnPush.addEventListener('click', function () {
    let emoteRandom = chooseRandom();
    arrayInicial.push(emoteRandom);
    showArray();
})


// función unshift
btnUnshift.addEventListener('click', function () {
    let emoteRandom = chooseRandom();
    arrayInicial.unshift(emoteRandom);
    showArray();
})

// función insert at
btnInsertAt.addEventListener('click', function () {
    // verificar que tengamos el array con la posición inpAddNumber.value existente
    // en caso de no existir mostrar un alert simple

    let arrayLenght = arrayInicial.length;
    let numberPosition = inpAddNumber.value;

    if (numberPosition < 0 || numberPosition > arrayLenght - 1) {
        alert(`número fuero de rango, seleccione uno entre 0 y ${arrayLenght - 1}`)
        return;
    }

    let emoteRandom = chooseRandom();
    arrayInicial[numberPosition] = emoteRandom;
    showArray();
})

// función pop
btnPop.addEventListener('click', function () {
    arrayInicial.pop();
    showArray();
})

// función shift
btnShift.addEventListener('click', function () {
    arrayInicial.shift();
    showArray();
})

// función remove at
btnRemoveAt.addEventListener('click', function () {
    // verificar si el elemento que se va a eliminar existe en esa posición
    let arrayLenght = arrayInicial.length;
    let numberInput = inpRemoveNumber.value;

    if (numberInput < 0 || numberInput > arrayLenght - 1) {
        alert(`número fuera de rango, el rango esta entre 0 y ${arrayLenght - 1}`);
        return;
    }

    arrayInicial.splice(numberInput, 1);
    showArray();
})