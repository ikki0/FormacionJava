'use strict';

/* 1. substituir a partir de la pizza todo a cervezas */
let arrayAlimentos : string[] = ['🍔', '🌯' , '🍣' , '🍕' , '🍜', '🍖', '🍘' , '🍘' , '🥥'];
let indexPizza : number = arrayAlimentos.indexOf('🍕');
console.log(indexPizza);

arrayAlimentos.fill('🍺', indexPizza);
console.log(arrayAlimentos);

/* encontrar si existe una piá en el array */
let arrayPineapple = ['🍕','🍕','🍕','🍕','🍍'];
let checkPineapple = arrayPineapple.some((element) => element === '🍍');
console.log(checkPineapple);


// Quitaar la piña del array
let removePineapple = ['🍕','🍕','🍕','🍍','🍕'];
let indexRemovePineapple = removePineapple.indexOf('🍍');

if (indexRemovePineapple !== -1){
    removePineapple.splice(indexRemovePineapple, 1);
}

console.log(removePineapple);

// convertir fresas en zetas
const convertirFresas = ['🍓', '🍓', '🍓', '🍓', '🍋'];
let arrayMushroom = convertirFresas.map(element => {
    if (element === '🍓'){
         element = '🍄'
    } 
    return element;
})

console.log(arrayMushroom);

/* añadir icono 🥵 despues de cada 🌶️ */
const arrayChilli = ['🌶️', '🥛','🌶️', '🥛','🌶️', '🥛']
// crear una copia de arrayChilli pero quiero que despues de un 🌶️ añada un 🥵

let newArrayChilli = arrayChilli.map((element) => {
    if (element === '🌶️'){
        element = '🌶️ 🥵'
    }
    return element;
})

console.log(newArrayChilli);

// ejercicio cartas
const cards = ['🎴','🎴','🎴','🎴','🃏','🎴'];
// crear nnuevo array newCards donde entre medio de cada 🎴 se agrege un 🃏
let newCards = cards.reduce((acc, element, index) => {
    if (index !== cards.length -1){
        if (element !== '🃏'){
            acc.push(element);
            acc.push('🃏');
        }
     
    } else {
        acc.push(element);
    }
    return acc;
}, []);  



console.log(newCards);