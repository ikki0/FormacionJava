'use strict';
// import Categories = require('../interface/Categories');
import { Category } from "../interface/Category";
const pRandomPhrases : HTMLElement | null = document.querySelector('.randomPhrases');
const pCategoryPhrases : HTMLElement | null = document.querySelector('.category-phrases');
const imgChuck : HTMLElement | null = document.querySelector('.imgChuck');
const btnRandom : HTMLElement | null = document.querySelector('.btn-random');
const select : HTMLSelectElement | null = document.querySelector('#default_select');
const btnCategory : HTMLElement | null = document.querySelector('.btn-category');
const iText : HTMLInputElement | null = document.querySelector('.nes-input');
const btnFindText : HTMLElement | null = document.querySelector('.btn-find-text');
const pFindText : HTMLElement | null = document.querySelector('.find-text');

let categories : Category ;

// function fetchRandom() {
//     fetch('https://api.chucknorris.io/jokess/random')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
   
//     })
//     .catch(error => console.log('error: ' , error));
// } 

// fetchRandom();

function showJoke(phrase : string) : void {
    if (pRandomPhrases) {
        pRandomPhrases.textContent = phrase;
    }
}


function createOptions(categories : Category) : void {
    for (const [key, value] of Object.entries(categories)) {
        const opt = document.createElement("option");
        opt.value = key;
        opt.text = value;
        if (select) {
            select.add(opt);
        }
    }
}

function showCategories(categories : Category) : void {
   if (Object.values(categories).length) {
        createOptions(categories);
   }
}

function showJokeCategory(phrase : string) : void {
    if (pCategoryPhrases) {
        pCategoryPhrases.textContent = phrase;
    }
}

function showFindText(phrase : string) : void {
    if (pFindText){
        pFindText.textContent = phrase;
    }
}

function calcRandomNumber(number : number) : number {
    return Math.round(Math.random() * number);
}

async function fetchRandomJoke() { 
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = await results.json();
            showJoke(data.value);
	} catch (error) {
		console.error(error);
	}
} 

async function fetchCategoriesJoke() : Promise<void> {
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

async function fetchCategory() : Promise<void>{
    const currentCategory = select?.options[select?.selectedIndex].text;
    
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random?category=${currentCategory}`);
        if (results.ok) {
            const data = await results.json();;
            showJokeCategory(data.value);
        }

    }
    catch (error) {
        console.error(error);
    }
}

async function fetchFindText() : Promise<void>{
    const currentText= iText?.value;
    
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