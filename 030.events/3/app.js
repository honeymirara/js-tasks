/*  Необходимо отобразить кнопку с надписью «Нажми на меня» и пустой инпут. По
клику на кнопку вызвать alert и отобразить сообщение из значения инпута
 */

let button = document.querySelector('.button');
button.addEventListener('click', function () {
    let input = document.querySelector('input');
    alert(input.value);
})