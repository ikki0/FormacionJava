"use strict";
// '1. Crea una función arrow function que retorne tu nombre y tus
// apellidos e imprímelos por pantalla desde fuera de la función'

let myName = (): string => `Alan Rojas Alvarez`;
console.log(myName());

// 2. Crea una función con nombre y sin return. Pásale un tipo de dato
// boolean y dentro de la función imprime el valor el valor que hemos
// pasado por los parámetros.

function fn1(valor: boolean): void {
  console.log(valor);
}

fn1(true);

// 3. Crea una función que reciba parámetros infinitos, haz la llamada
// con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.

function fn2(...numbers: number[]): void {
  numbers.forEach((value) => {
    console.log(value);
  });
}

fn2(1, 2, 3, 4, 5);
