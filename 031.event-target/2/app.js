/* По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
границы кнопки сновка скрывать
 */

let buttonTag = document.querySelector('button');

buttonTag.addEventListener('mouseover', function () {
    let paragraph = document.querySelector('.message');
    paragraph.innerHTML = 'Hi';
})

element.addEventListener('mouseout', function () {
    let paragraph = document.querySelector('.message');
    paragraph.innerHTML = '';
})

