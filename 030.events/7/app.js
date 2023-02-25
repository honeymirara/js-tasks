/* Записать в результат удвоенное значение инпута. Добавить проверки  */

const buttonTag = document.querySelector('button');
const inputTag = document.querySelector('input');
const resultTag = document.querySelector('.result');

buttonTag.addEventListener('click', function () {
    try {
        if(isNaN(inputTag)) throw new Error("it isn't  a number")

    } catch (err) {
        alert(err.message);
    }
    let result = inputTag
})