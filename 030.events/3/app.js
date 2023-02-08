/*  Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
клику на кнопку вызвать alert и отобразить сообщение из значения инпута
 */

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    try {
        let input = document.querySelector('input');
        if (input.value === '') throw new Error('нет значения');
        alert(input.value);
    } catch (error) {
        alert(error.message)
    }
})