'use strict';

const btnStart = document.querySelector('.btn-start');
const btnEstatistics = document.querySelector('.btn-statistics');
const btnDelete = document.querySelector('.btn-delete');
const dvOptions = document.querySelector('.options');
const dvCards = document.querySelector('.cards');
const imgPiedra = document.querySelector('.imgPiedra');
const imgPapel = document.querySelector('.imgPapel');
const imgTijera = document.querySelector('.imgTijera');
const dvWinner = document.querySelector('.card-winner');
const imgPlayer = document.querySelector('.imgPlayer');
const imgPC = document.querySelector('.imgPC');
const dvResultado = document.querySelector('.resultado');
const dvModal = document.querySelector('.modal');
const pGanadas = document.querySelector('.p-ganadas');
const pPerdidas = document.querySelector('.p-perdidas');
const pEmpatadas = document.querySelector('.p-empatadas');
const spClose = document.querySelector('.sp-close');

let seleccionJugador = '';
const opcionesJuego = {
    0: 'piedra',
    1: 'papel',
    2: 'tijera'
}
let statsWinner = 0;
let statsLose = 0;
let statsDraw = 0;


function toggleOptions() {
    // dvOptions.classList.add('hidden');
    dvOptions.classList.toggle('hidden');
}

function toggleOptionsGame() {
    dvCards.classList.toggle('hidden');
}

// Primera fase click iniciar juego
btnStart.addEventListener('click', function () {
    dvWinner.classList.add('hidden');
    toggleOptions();
    toggleOptionsGame();
});

function seleccionRandom() {
    return Math.round(Math.random() * 2);
}

function procesaDatos(randomNumber) {
    return opcionesJuego[randomNumber];
}

function checkWinner(selectPC) {
    let result;

    const tableResult = {
        'piedra': {
            'piedra': 'empata',
            'papel': 'gana',
            'tijera': 'pierde',
        },
        'papel': {
            'piedra': 'pierde',
            'papel': 'empata',
            'tijera': 'gana',
        },
        'tijera': {
            'piedra': 'gana',
            'papel': 'pierde',
            'tijera': 'empata',
        }
    }

    return tableResult[selectPC][seleccionJugador];
}

function saveData(veredicto) {
    const tableStats = {
        'gana': function () {
            statsWinner++
        },

        'pierde': function () {
            statsLose++
        },

        'empata': function () {
            statsDraw++
        }
    }

    tableStats[veredicto]();
    // almacenar los valores en localStorage
    localStorage.setItem('ganadas', statsWinner);
    localStorage.setItem('perdidas', statsLose);
    localStorage.setItem('empatadas', statsDraw);
}

function checkResultPC(resultPlayer) {
    const resultPC = {
        'gana': 'pierde',
        'pierde': 'gana',
        'empata': 'empata'
    }

    return resultPC[resultPlayer];
}

function showWinner(selectJugador, selectPC, veredicto) {
    // console.log('selectJugador: ', selectJugador);
    // console.log('selectPC: ', selectPC);
    imgPlayer.src = `./img/${selectJugador}.png`;
    imgPC.src = `./img/${selectPC}.png`;
    let maquinaResultado = checkResultPC(veredicto);

    dvResultado.innerHTML = `
    <p>
    JUGADOR: ${veredicto}
    </p>

    <p>
    MÁQUINA: ${maquinaResultado}
    </p>
    `;
    dvWinner.classList.remove('hidden');
}

// Segunda fase, seleccionar opción pulsada
imgPiedra.addEventListener('click', function () {
    seleccionJugador = 'piedra';
    // selección PC random
    let randomNumber = seleccionRandom();
    let numberToString = procesaDatos(randomNumber);
    let veredicto = checkWinner(numberToString);
    // guardar las estadísticas en la local storage
    saveData(veredicto);
    toggleOptions();
    toggleOptionsGame();
    showWinner(seleccionJugador, numberToString, veredicto);
})

imgPapel.addEventListener('click', function () {
    seleccionJugador = 'papel';
    // selección PC random
    let randomNumber = seleccionRandom();
    let numberToString = procesaDatos(randomNumber);
    let veredicto = checkWinner(numberToString);
    // guardar las estadísticas en la local storage
    saveData(veredicto)
    toggleOptions();
    toggleOptionsGame();
    showWinner(seleccionJugador, numberToString, veredicto);
})

imgTijera.addEventListener('click', function () {
    seleccionJugador = 'tijera';
    // selección PC random
    let randomNumber = seleccionRandom();
    let numberToString = procesaDatos(randomNumber);
    let veredicto = checkWinner(numberToString);
    // guardar las estadísticas en la local storage
    saveData(veredicto)
    toggleOptions();
    toggleOptionsGame();
    showWinner(seleccionJugador, numberToString, veredicto);
})

btnEstatistics.addEventListener('click', function () {
    pGanadas.innerHTML = `
        Partidas Ganadas : ${localStorage.getItem('ganadas') ?? 0}
    `;
    pPerdidas.innerHTML = `
        Partidas Perdidas : ${localStorage.getItem('perdidas') ?? 0}
    `;
    pEmpatadas.innerHTML = `
        Partidas Empatadas : ${localStorage.getItem('empatadas') ?? 0}
    `;
    dvModal.classList.toggle('hidden');
})

spClose.addEventListener('click', function () {
    dvModal.classList.add('hidden');
});

btnDelete.addEventListener('click', function () {
    localStorage.clear();
});