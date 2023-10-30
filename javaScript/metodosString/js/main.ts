"use strict";
// 1. Crea una función en la que pasándole un string como parámetro
// se substituyan las letras A por las O.

function substituyeLetra(valor: string): string {
  let resultado = valor.replaceAll("a", "o");
  return resultado;
}

substituyeLetra("pan");
substituyeLetra("pan con tomate");

// 2. Crea una función que compruebe si un string pasado como
// parámetro empieza por ‘aca’ y llama dos veces a la función una con
// academia y otra con escuela.
function compruebaInicio(palabra: string): boolean {
  return palabra.startsWith("aca");
}

console.log(
  "academia: ",
  compruebaInicio("academia") ? 'comienza por "aca" ' : 'no comieza por "aca" '
);

console.log(
  "escuela: ",
  compruebaInicio("escuela") ? 'comienza por "aca" ' : 'no comieza por "aca" '
);

// 3. Crea una función que pasándole un Hola nos salude 3 veces
// utilizando métodos de Strings.

function fnHola(palabra: string): string {
  return (palabra + " ").repeat(3);
}

console.log(fnHola("hola"));
