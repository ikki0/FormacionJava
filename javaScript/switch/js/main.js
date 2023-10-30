"use strict";
// 1. Crear un switch case para los meses del año entre 1 y 12
let numeroMes = 2;
let mes;
switch (numeroMes) {
    case 1:
        mes = "enero";
        break;
    case 2:
        mes = "febrero";
        break;
    case 3:
        mes = "marzo";
        break;
    case 4:
        mes = "abril";
        break;
    case 5:
        mes = "mayo";
        break;
    case 6:
        mes = "junio";
        break;
    case 7:
        mes = "julio";
        break;
    case 8:
        mes = "agosto";
        break;
    case 9:
        mes = "septiembre";
        break;
    case 10:
        mes = "octubre";
        break;
    case 11:
        mes = "noviembre";
        break;
    case 12:
        mes = "diciembre";
        break;
    default:
        mes = "número fuera del rango entre 1 - 12";
        break;
}
console.log(`si el número del mes es: ${numeroMes}, estamos en ${mes}`);
// Otra manera de hacerlo con Object Literal
const mesesDelAnyo = {
    1: "enero",
    2: "febreo",
    3: "marzo",
    4: "abril",
    5: "mayo",
    6: "junio",
    7: "julio",
    8: "agosto",
    9: "septiembre",
    10: "octubre",
    11: "noviembre",
    12: "diciembre",
};
let defaultMeses = "numero fuera de rango 1 - 12";
const resultadoMes = mesesDelAnyo[numeroMes] || defaultMeses;
console.log(`estamos en el mes: ${resultadoMes}`);
// convertir un numero string a numero mediante switch case
// pedir el número mediante prompt
const numeroString = prompt("introduzca un número entre el 1 y el 5");
let numeroNumber;
switch (numeroString) {
    case "1":
        numeroNumber = 1;
        break;
    case "2":
        numeroNumber = 2;
        break;
    case "3":
        numeroNumber = 3;
        break;
    case "4":
        numeroNumber = 4;
        break;
    case "5":
        numeroNumber = 5;
        break;
    default:
        numeroNumber = null;
        break;
}
console.log(`tipo de dato inicial: ${typeof numeroString} , tipo de dato final ${typeof numeroNumber}`);
