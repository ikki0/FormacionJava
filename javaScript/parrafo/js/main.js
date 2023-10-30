$(document).ready(function () {
    const btnRed = $('.btn-red');
    const btnBlue = $('.btn-blue');
    const p1 = $('.p-1');
    const p2 = $('.p-2');

    btnRed.click(function () {
        p1.toggleClass("red");
    });

    btnBlue.click(function () {
        p2.toggleClass("blue");
    });
});