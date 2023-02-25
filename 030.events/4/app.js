/* Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
Проверки на ввод. Обработать ошибки */

const inputTag = document.querySelector('input');
const buttonTag = document.querySelector('button');

buttonTag.addEventListener('click', function () {
    try {
        if (!inputTag.value) throw new Error('input is empty');
        if (!isNaN(inputTag.value)) throw new Error('input is not correct');
        alert(inputTag.value);
    } catch (err) {
        alert(err.message);
    }
});



