/* Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
клику на кнопку вызвать alert и отобразить сообщение из значения инпута.
Проверки на ввод. Обработать ошибки */

let btn = document.querySelector('.button');
btn.addEventListener('click', function () {


    try {
        let inp = document.querySelector('input');
        if (!inp.value) {
            throw new Error('пустое сообщение');
        }
        inp.style = 'border: 1px solid black';
        inp.value = '';
        alert(inp.value);

    } catch (err) {
        inp.style = 'border: 1px solid red';
        alert(err.message);
    }

})