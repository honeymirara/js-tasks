/* По наведению на кнопку вывести сообщение «Hi». Когда мышка выходит за
границы кнопки сновка скрывать
 */

const buttonTag = document.querySelector('button');
const messageTag = document.querySelector('.message');

buttonTag.addEventListener('mousemove', function () {
    try {

        messageTag.innerHTML('Hi');
    } catch (err) {
        alert(err.message);
    }

})

