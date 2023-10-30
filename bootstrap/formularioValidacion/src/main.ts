const form : HTMLElement | null = document.querySelector('.form');
const btnSubmit: HTMLButtonElement | null = document.querySelector('.btn-submit');
const iName : HTMLInputElement | null = document.querySelector('#validate-first-name');
const iLastName : HTMLInputElement| null = document.querySelector('#validate-last-name');
const iUserName : HTMLInputElement | null = document.querySelector('#validate-user-name');
const iCity : HTMLInputElement | null = document.querySelector('#validate-city');
const iState : HTMLInputElement | null = document.querySelector('#validate-state');
const iCheckBox: HTMLInputElement | null = document.querySelector('#validate-checkbox');

function checkName(): void {
    if (iName?.value) {
        iName.classList.add('is-valid')
        iName.classList.remove('is-invalid');
    }else {
        iName?.classList.add('is-invalid')
        iName?.classList.remove('is-valid')
    }
}


function checkLastName() : void {
    if (iLastName?.value) {
        iLastName.classList.add('is-valid')
        iLastName.classList.remove('is-invalid');
    }else {
        iLastName?.classList.add('is-invalid')
        iLastName?.classList.remove('is-valid')
    }
}

function checkUserName() : void{
    if (iUserName?.value) {
        iUserName.classList.add('is-valid')
        iUserName.classList.remove('is-invalid');
    }else {
        iUserName?.classList.add('is-invalid')
        iUserName?.classList.remove('is-valid')
    }
}

function checkCity() : void{
    if (iCity?.value) {
        iCity.classList.add('is-valid')
        iCity.classList.remove('is-invalid');
    }else {
        iCity?.classList.add('is-invalid')
        iCity?.classList.remove('is-valid')
    }
}


function checkState(): void {
     if (iCity?.value) {
        iCity.classList.add('is-valid')
        iCity.classList.remove('is-invalid');
    }else {
        iCity?.classList.add('is-invalid')
        iCity?.classList.remove('is-valid')
    }
}

function checkCheckbox(): void {
    if (iCheckBox?.checked) {
        iCheckBox.classList.add('is-valid')
        iCheckBox.classList.remove('is-invalid');
    }else {
        iCheckBox?.classList.add('is-invalid')
        iCheckBox?.classList.remove('is-valid')
    }
}

function beforeSubmit(event: Event) {
    event.preventDefault();
    checkName();
    checkLastName();
    checkUserName();
    checkCity();
    checkState();
    checkCheckbox();
}

form?.addEventListener('submit', beforeSubmit);