'use strict';
const pRandomPhrases = document.querySelector('.randomPhrases');
const pCategoryPhrases = document.querySelector('.category-phrases');
const imgChuck = document.querySelector('.imgChuck');
const btnRandom = document.querySelector('.btn-random');
const select = document.querySelector('#default_select');
const btnCategory = document.querySelector('.btn-category');
const iText = document.querySelector('.nes-input');
const btnFindText = document.querySelector('.btn-find-text');
const pFindText = document.querySelector('.find-text');
let categories;
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
function createOptions(categories) {
    for (const [key, value] of Object.entries(categories)) {
        const opt = document.createElement("option");
        opt.value = key;
        opt.text = value;
        if (select) {
            select.add(opt);
        }
    }
}
function showCategories(categories) {
    if (Object.values(categories).length) {
        createOptions(categories);
    }
}
function showJokeCategory(phrase) {
    if (pCategoryPhrases) {
        pCategoryPhrases.textContent = phrase;
    }
}
function showFindText(phrase) {
    if (pFindText) {
        pFindText.textContent = phrase;
    }
}
function calcRandomNumber(number) {
    return Math.round(Math.random() * number);
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
        if (results.ok) {
            const data = await results.json();
            categories = data;
            showCategories(categories);
            fetchCategory();
        }
    }
    catch (error) {
        console.error(error);
    }
}
async function fetchCategory() {
    const currentCategory = select?.options[select?.selectedIndex].text;
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`);
        if (results.ok) {
            const data = await results.json();
            ;
            showJokeCategory(data.value);
        }
    }
    catch (error) {
        console.error(error);
    }
}
async function fetchFindText() {
    const currentText = iText?.value;
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/search?query=${currentText}`);
        if (results.ok) {
            const data = await results.json();
            let randomNumber = calcRandomNumber(data.result.length);
            showFindText(data.result[randomNumber].value);
        }
    }
    catch (error) {
        console.error(error);
    }
}
btnRandom?.addEventListener('click', fetchRandomJoke);
btnCategory?.addEventListener('click', fetchCategory);
btnFindText?.addEventListener('click', fetchFindText);
fetchRandomJoke();
fetchCategoriesJoke();
export {};
