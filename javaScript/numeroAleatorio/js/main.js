"use strict";
function random() {
    let number = Math.round(Math.random());
    return number === 0 ? "cruz" : "cara";
}
console.log(random());
