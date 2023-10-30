"use strict";
const form = document.querySelector('.form');
const btnSubmit = document.querySelector('.btn-submit');
const iName = document.querySelector('#validate-first-name');
const iLastName = document.querySelector('#validate-last-name');
const iUserName = document.querySelector('#validate-user-name');
const iCity = document.querySelector('#validate-city');
const iState = document.querySelector('#validate-state');
const iCheckBox = document.querySelector('#validate-check-box');
function checkName() {
    if (iName?.value) {
        iName.classList.add('is-valid');
        iName.classList.remove('is-invalid');
    }
    else {
        iName?.classList.add('is-invalid');
        iName?.classList.remove('is-valid');
    }
}
function checkLastName() {
    if (iLastName?.value) {
        iLastName.classList.add('is-valid');
        iLastName.classList.remove('is-invalid');
    }
    else {
        iLastName?.classList.add('is-invalid');
        iLastName?.classList.remove('is-valid');
    }
}
function checkUserName() {
    if (iUserName?.value) {
        iUserName.classList.add('is-valid');
        iUserName.classList.remove('is-invalid');
    }
    else {
        iUserName?.classList.add('is-invalid');
        iUserName?.classList.remove('is-valid');
    }
}
function checkCity() {
    if (iCity?.value) {
        iCity.classList.add('is-valid');
        iCity.classList.remove('is-invalid');
    }
    else {
        iCity?.classList.add('is-invalid');
        iCity?.classList.remove('is-valid');
    }
}
function checkState() {
    if (iCity?.value) {
        iCity.classList.add('is-valid');
        iCity.classList.remove('is-invalid');
    }
    else {
        iCity?.classList.add('is-invalid');
        iCity?.classList.remove('is-valid');
    }
}
function beforeSubmit(event) {
    event.preventDefault();
    checkName();
    checkLastName();
    checkUserName();
    checkCity();
    checkState();
    checkCheckbox();
}
form?.addEventListener('submit', beforeSubmit);
