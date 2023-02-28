/* Вывести в строчку все вводимые значения через инпут в виде массива. Добавить
проверку, что поле не пустое */
const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('button');
const resultTag = document.querySelector('.result');

buttonTag.addEventListener('click', function () {
    try {
        if (!inputTag.value) throw new Error("input is empty");


        let arrayResult = inputTag.value.join('');
        inputTag.value.innerHTML = arrayResult;

    } catch (err) {
        alert(err.message);
    }
})
