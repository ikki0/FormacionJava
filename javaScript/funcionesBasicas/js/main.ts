"use strict";

function suma(number1: number, number2: number, number3: number): number {
  return number1 + number2 + number3;
}

console.log(suma(1, 1, 1));

function nombreCompleto(
  nombre: string,
  apellido1: string,
  apellido2: string
): string {
  return `${nombre} ${apellido1} ${apellido2}`;
}

console.log(
  `mi nombre completo es: ${nombreCompleto("alan", "rojas", "alvarez")}`
);

function calculaMayor(numero1: number, numero2: number): number {
  return numero1 >= numero2 ? numero1 : numero2;
}

console.log(`el numero mayor entre 1 y 2 es: ${calculaMayor(1, 2)}`);
