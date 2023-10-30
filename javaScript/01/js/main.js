// Tipos de datos
'use strict';

let unString = "pan con tomate";
let unNumero = 1;
let unBooleano = false;
let unSymbol = Symbol("cacahuete")
let unUndefined = undefined;
let unNull = null;
let unObjeto = {
    "color": "azul",
    "intensidad": "fuerte"
};
let unArray = [1, 2, 3, 4];
function suma(num1, num2) {
    return num1 + num2;
}

// variable global
const patata = "patataGlobal";

function variableLocal() {
    let patata = "patataLocal"
    console.log(patata);
}


console.log(`el tipo de dato es: ${typeof unString} y el valor es: ${unString}`);
console.log(`el tipo de dato es ${typeof unNumero} y el valor es ${unNumero}`);
console.log(`el tipo de dato es ${typeof unBooleano} y el valor es ${unBooleano}`);
console.log(`el tipo de datos es: ${typeof unSymbol} y el valor es: ${unSymbol.description}`);
console.log(`el tipo de dato es: ${typeof unUndefined} y el valor es: ${unUndefined}`);
console.log(`el tipo de dato es: ${typeof unNull} y el valor es: ${unNull}`);
console.log(`el tipo de dato es; ${typeof unObjeto} y el valor es; ${Object.values(unObjeto)}`);
console.log(`el tipo de dato es: ${typeof unArray} y el valor es: ${unArray}`);
console.log(`el tipo de dato es: ${typeof suma(1, 1)} y el valor es: ${suma(1, 1)}`);


// función con parámetros infinitos
