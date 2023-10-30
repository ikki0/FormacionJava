'use strict';
const pRandomPhrases = document.querySelector('.randomPhrases');
const imgChuck = document.querySelector('.imgChuck');
const btnRandom = document.querySelector('.btn-random');
// function fetchRandom() {
//     fetch('https://api.chucknorris.io/jokess/random')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//     })
//     .catch(error => console.log('error: ' , error));
// } 
// fetchRandom();
function showJoke(phrase) {
    if (pRandomPhrases) {
        pRandomPhrases.textContent = phrase;
    }
}
function showCategories(data) {
    console.log(data);
}
async function fetchRandomJoke() {
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = await results.json();
        showJoke(data.value);
    }
    catch (error) {
        console.error(error);
    }
}
async function fetchCategoriesJoke() {
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/categories`);
        const data = await results.json();
        // showCategories(data);
    }
    catch (error) {
        console.error(error);
    }
}
btnRandom?.addEventListener('click', fetchRandomJoke);
fetchRandomJoke();
// fetchCategoriesJoke();
console.log('a');
export {};
