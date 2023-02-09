/* Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
возвращается первая картинка */

const btn = document.querySelector('button');
const input = document.querySelector('input');
const result = document.querySelector('.result');
const arr = [];

btn.addEventListener('click', function () {
    try {
        if (!input.value) throw new Error('input is Empty')

    } catch (err) {
        console.log(err.message);
    }
})