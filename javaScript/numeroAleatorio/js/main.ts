"use strict";

function random(): string {
  let number: number = Math.round(Math.random());
  return number === 0 ? "cruz" : "cara";
}

console.log(random());
