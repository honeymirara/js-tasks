/* Записать в результат удвоенное значение инпута. Добавить проверки  */

const buttonTag = document.querySelector('button');
const inputTag = document.querySelector('input');
const resultTag = document.querySelector('.result');

buttonTag.addEventListener('click', function () {
    try {
        if (isNaN(inputTag.value)) throw new Error("it isn't  a number");
        let doubleNum = +inputTag.value * 2;
        resultTag.innerHTML = doubleNum;
    } catch (err) {
        alert(err.message);
    }

})