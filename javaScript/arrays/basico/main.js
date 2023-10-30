'use strict';
/* 1. substituir a partir de la pizza todo a cervezas */
var arrayAlimentos = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍖', '🍘', '🍘', '🥥'];
var indexPizza = arrayAlimentos.indexOf('🍕');
console.log(indexPizza);
arrayAlimentos.fill('🍺', indexPizza);
console.log(arrayAlimentos);
/* encontrar si existe una piá en el array */
var arrayPineapple = ['🍕', '🍕', '🍕', '🍕', '🍍'];
var checkPineapple = arrayPineapple.some(function (element) { return element === '🍍'; });
console.log(checkPineapple);
// Quitaar la piña del array
var removePineapple = ['🍕', '🍕', '🍕', '🍍', '🍕'];
var indexRemovePineapple = removePineapple.indexOf('🍍');
if (indexRemovePineapple !== -1) {
    removePineapple.splice(indexRemovePineapple, 1);
}
console.log(removePineapple);
// convertir fresas en zetas
var convertirFresas = ['🍓', '🍓', '🍓', '🍓', '🍋'];
var arrayMushroom = convertirFresas.map(function (element) {
    if (element === '🍓') {
        element = '🍄';
    }
    return element;
});
console.log(arrayMushroom);
/* añadir icono 🥵 despues de cada 🌶️ */
var arrayChilli = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];
// crear una copia de arrayChilli pero quiero que despues de un 🌶️ añada un 🥵
var newArrayChilli = arrayChilli.map(function (element) {
    if (element === '🌶️') {
        element = '🌶️ 🥵';
    }
    return element;
});
console.log(newArrayChilli);
// ejercicio cartas
var cards = ['🎴', '🎴', '🎴', '🎴', '🃏', '🎴'];
// crear nnuevo array newCards donde entre medio de cada 🎴 se agrege un 🃏
var newCards = cards.reduce(function (acc, element, index) {
    if (index !== cards.length - 1) {
        if (element !== '🃏') {
            acc.push(element);
            acc.push('🃏');
        }
    }
    else {
        acc.push(element);
    }
    return acc;
}, []);
console.log(newCards);
