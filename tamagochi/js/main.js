'use strict'

/* 
    Respecto la barra de progreso:
    1- Si supera el 50% - color verde
    2- Si es superior al 20% pero inferior al 50% - color naranja
    3- Si es inferior o igual al 20% - color rojo
*/

const btnBanana = document.querySelector('.icon-banana');
const btnRice = document.querySelector('.icon-rice');
const btnCardio = document.querySelector('.icon-cardio');
const btnPress = document.querySelector('.icon-press');
const btnCreatine = document.querySelector('.icon-creatine');
const btnProtein = document.querySelector('.icon-protein');
const btnSleep = document.querySelector('.icon-sleep');
const btnMoon = document.querySelector('.icon-moon');
const sEat = document.querySelector('.percentage-eat');
const sTraining = document.querySelector('.percentage-training');
const sSupplementation = document.querySelector('.percentage-supplementation');
const sSleep = document.querySelector('.percentage-sleep');
const sAvatar = document.querySelector('.percentage-avatar');
const imgAvatar = document.querySelector('.img-avatar');

// acces value root percentages
const percentageEat = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageEat');
const percentageTraining = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageTraining');
const percentageSupplementation = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageSupplementation');
const percentageSleep = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageSleep');

let numberPercentageEat = percentageEat.substring(0, percentageEat.indexOf('%'));
let numberPercentageTraining = percentageTraining.substring(0, percentageTraining.indexOf('%'));
let numberPercentageSupplementation = percentageSupplementation.substring(0, percentageSupplementation.indexOf('%'));
let numberPercentageSleep = percentageSleep.substring(0, percentageSleep.indexOf('%'));



const addPercentage1 = 10;
const addPercentage2 = 20;

function numberEat() {
    const percentageEat = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageEat');
    return Number(percentageEat.substring(0, percentageEat.indexOf('%')));
}

function numberTraining() {
    const percentageTraining = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageTraining');
    return Number(percentageTraining.substring(0, percentageTraining.indexOf('%')));
}

function numberSupplementation() {
    const percentageSupplementation = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageSupplementation');
    return Number(percentageSupplementation.substring(0, percentageSupplementation.indexOf('%')));
}

function numberSleep() {
    const percentageSleep = window.getComputedStyle(document.documentElement).getPropertyValue('--percentageSleep');
    return Number(percentageSleep.substring(0, percentageSleep.indexOf('%')));
}

function setValueEat(percentageToNumber, number) {
    const addPercentage = number === 1 ? addPercentage1 : addPercentage2;

    const increase = (percentageToNumber < 100) && (addPercentage + percentageToNumber <= 100) ? addPercentage + percentageToNumber + "%" : 100 + "%";
    document.documentElement.style.setProperty('--percentageEat', increase);
}

function setValueTraining(percentageToNumber, number) {
    const addPercentage = number === 1 ? addPercentage1 : addPercentage2;

    const increase = (percentageToNumber < 100) && (addPercentage + percentageToNumber <= 100) ? addPercentage + percentageToNumber + "%" : 100 + "%";

    document.documentElement.style.setProperty('--percentageTraining', increase);
}

function setValueSupplementation(percentageToNumber, number) {
    const addPercentage = number === 1 ? addPercentage1 : addPercentage2;

    const increase = (percentageToNumber < 100) && (addPercentage + percentageToNumber <= 100) ? addPercentage + percentageToNumber + "%" : 100 + "%";
    document.documentElement.style.setProperty('--percentageSupplementation', increase);
}

function setValueSleep(percentageToNumber, number) {
    const addPercentage = number === 1 ? addPercentage1 : addPercentage2;

    const increase = (percentageToNumber < 100) && (addPercentage + percentageToNumber <= 100) ? addPercentage + percentageToNumber + "%" : 100 + "%";
    document.documentElement.style.setProperty('--percentageSleep', increase);
}

function setColorProgressEat(numberProgess) {
    if (numberProgess <= 20) {
        document.documentElement.style.setProperty('--bgEat', 'red');
    } else if (numberProgess > 20 && numberProgess < 50) {
        document.documentElement.style.setProperty('--bgEat', 'orange');
    } else {
        document.documentElement.style.setProperty('--bgEat', 'rgb(21, 221, 21)');
    }
}

function setColorProgressTraining(numberProgess) {
    if (numberProgess <= 20) {
        document.documentElement.style.setProperty('--bgTraining', 'red');
    } else if (numberProgess > 20 && numberProgess < 50) {
        document.documentElement.style.setProperty('--bgTraining', 'orange');
    } else {
        document.documentElement.style.setProperty('--bgTraining', 'rgb(21, 221, 21)');
    }
}

function setColorProgressSupplementation(numberProgess) {
    if (numberProgess <= 20) {
        document.documentElement.style.setProperty('--bgSupplementation', 'red');
    } else if (numberProgess > 20 && numberProgess < 50) {
        document.documentElement.style.setProperty('--bgSupplementation', 'orange');
    } else {
        document.documentElement.style.setProperty('--bgSupplementation', 'rgb(21, 221, 21)');
    }
}

function setColorProgressSleep(numberProgess) {
    if (numberProgess <= 20) {
        document.documentElement.style.setProperty('--bgSleep', 'red');
    } else if (numberProgess > 20 && numberProgess < 50) {
        document.documentElement.style.setProperty('--bgSleep', 'orange');
    } else {
        document.documentElement.style.setProperty('--bgSleep', 'rgb(21, 221, 21)');
    }
}

function setColorProgressAvatar(value) {
    if (value <= 20) {
        document.documentElement.style.setProperty('--bgAvatar', 'red');
    } else if (value > 20 && value < 50) {
        document.documentElement.style.setProperty('--bgAvatar', 'orange');
    } else {
        document.documentElement.style.setProperty('--bgAvatar', 'rgb(21, 221, 21)');
    }
}

function checkNewValueEat() {
    let progressEatValue = numberEat();
    return progressEatValue > 0;
}

function checkNewValueTraining() {
    let progressTrainingValue = numberTraining();
    return progressTrainingValue > 0;
}

function checkNewValueSupplementation() {
    let progressSupplementationValue = numberSupplementation();
    return progressSupplementationValue > 0;
}

function checkNewValueSleep() {
    let progressSleepValue = numberSleep();
    return progressSleepValue > 0;
}

function reduceProgressEat(numberEat) {
    const decrease = numberEat - 10 + "%"
    document.documentElement.style.setProperty('--percentageEat', decrease);
}

function reduceProgressTraining(numberTraining) {
    const decrease = numberTraining - 10 + "%"
    document.documentElement.style.setProperty('--percentageTraining', decrease);
}

function reduceProgressSupplementation(numberSupplementation) {
    const decrease = numberSupplementation - 10 + "%"
    document.documentElement.style.setProperty('--percentageSupplementation', decrease);
}

function reduceProgressSleep(numberSleep) {
    const decrease = numberSleep - 10 + "%"
    document.documentElement.style.setProperty('--percentageSleep', decrease);
}

function newProgressAvatar(value) {
    document.documentElement.style.setProperty('--percentageAvatar', value + "%");
}

function setNewPercentageEat(newValue) {
    sEat.textContent = newValue + "%";
}

function setNewPercentageTraining(newValue) {
    sTraining.textContent = newValue + "%";
}

function setNewPercentageSupplementation(newValue) {
    sSupplementation.textContent = newValue + "%";
}

function setNewPercentageSleep(newValue) {
    sSleep.textContent = newValue + "%";
}

function setNewPercentageAvatar(newValue) {
    sAvatar.textContent = `Happiness: ${newValue}%`
}

function calcAverage(valueEat, valueTraining, valueSupplementation, valueSleep) {
    return Math.round((valueEat + valueTraining + valueSupplementation + valueSleep) / 4);
}

function initializeProgressBar() {
    setInterval(function () {
        let checkValueEat = checkNewValueEat();
        let checkValueTraining = checkNewValueTraining();
        let checkValueSupplementation = checkNewValueSupplementation();
        let checkValueSleep = checkNewValueSleep();

        if (checkValueEat) {
            reduceProgressEat(numberEat());
            setColorProgressEat(numberEat());
            setNewPercentageEat(numberEat());
        }

        if (checkValueTraining) {
            reduceProgressTraining(numberTraining());
            setColorProgressTraining(numberTraining());
            setNewPercentageTraining(numberTraining());
        }

        if (checkValueSupplementation) {
            reduceProgressSupplementation(numberSupplementation());
            setColorProgressSupplementation(numberSupplementation());
            setNewPercentageSupplementation(numberSupplementation());
        }

        if (checkValueSleep) {
            reduceProgressSleep(numberSleep());
            setColorProgressSleep(numberSleep());
            setNewPercentageSleep(numberSleep());

        }

        if (checkValueEat || checkValueTraining || checkValueSupplementation || checkValueSleep) {
            const average = calcAverage(numberEat(), numberTraining(), numberSupplementation(), numberSleep());
            newProgressAvatar(average);
            setColorProgressAvatar(average);
            setNewPercentageAvatar(average);
        }

        // check image avatar to flaco
        const average = calcAverage(numberEat(), numberTraining(), numberSupplementation(), numberSleep());
        checkAvatarEvolution(average);

    }, 5000);

}

function modifyAvatarProgressBar() {
    // container avatar
    const average = calcAverage(numberEat(), numberTraining(), numberSupplementation(), numberSleep());
    newProgressAvatar(average);
    setColorProgressAvatar(average);
    setNewPercentageAvatar(average);
}

function checkAvatarEvolution(value) {
    let checkAvatar = calcAverage(numberEat(), numberTraining(), numberSupplementation(), numberSleep()) === 100;

    if (checkAvatar) {
        imgAvatar.src = '../img/gymbro1.png';
    } else {
        imgAvatar.src = '../img/flaco.png';
    }
}

btnBanana.addEventListener('click', function () {
    const percentageToNumber = numberEat();

    setValueEat(percentageToNumber, 1);
    setColorProgressEat(percentageToNumber)
    setNewPercentageEat(numberEat());


    modifyAvatarProgressBar();
    checkAvatarEvolution(average);

})

btnRice.addEventListener('click', function () {
    const percentageToNumber = numberEat();

    setValueEat(percentageToNumber, 2);
    setColorProgressEat(percentageToNumber)
    setNewPercentageEat(numberEat());

    modifyAvatarProgressBar();
    checkAvatarEvolution();


})


btnCardio.addEventListener('click', function () {
    const percentageToNumber = numberTraining();

    setValueTraining(percentageToNumber, 1);
    setColorProgressTraining(percentageToNumber)
    setNewPercentageTraining(numberTraining());

    modifyAvatarProgressBar();
    checkAvatarEvolution();

});

btnPress.addEventListener('click', function () {
    const percentageToNumber = numberTraining();

    setValueTraining(percentageToNumber, 2);
    setColorProgressTraining(percentageToNumber);
    setNewPercentageTraining(numberTraining());

    modifyAvatarProgressBar();
    checkAvatarEvolution();


});

btnCreatine.addEventListener('click', function () {
    const percentageToNumber = numberSupplementation();

    setValueSupplementation(percentageToNumber, 1);
    setColorProgressSupplementation(percentageToNumber)
    setNewPercentageSupplementation(numberSupplementation());

    modifyAvatarProgressBar();
    checkAvatarEvolution();

});

btnProtein.addEventListener('click', function () {
    const percentageToNumber = numberSupplementation();

    setValueSupplementation(percentageToNumber, 2);
    setColorProgressSupplementation(percentageToNumber)
    setNewPercentageSupplementation(numberSupplementation());

    modifyAvatarProgressBar();
    checkAvatarEvolution();


});

btnSleep.addEventListener('click', function () {
    const percentageToNumber = numberSleep();

    setValueSleep(percentageToNumber, 1);
    setColorProgressSleep(percentageToNumber)
    setNewPercentageSleep(numberSleep());

    modifyAvatarProgressBar();
    checkAvatarEvolution();


});

btnMoon.addEventListener('click', function () {
    const percentageToNumber = numberSleep();

    setValueSleep(percentageToNumber, 2);
    setColorProgressSleep(percentageToNumber);
    setNewPercentageSleep(numberSleep());

    modifyAvatarProgressBar();
    checkAvatarEvolution();


});


initializeProgressBar();