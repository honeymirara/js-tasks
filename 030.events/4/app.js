/* Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
Проверки на ввод. Обработать ошибки */

let btn = document.querySelector('.button');
btn.addEventListener('click', function () {
    let inp = document.querySelector('input');

    try {
        if (!inp.value) {
            throw new Error('пустое сообщение');
        }
        alert(inp.value);

    } catch (err) {
        alert(err.message);
    }

})