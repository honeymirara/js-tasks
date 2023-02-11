/* Добавьте картинку на страницу. При наведении на картинку мышкой необходимо
ее изменять на другую картинку. Но как только мышка снова отходит в сторону, то
возвращается первая картинка */

const img = document.querySelector('.img');
img.addEventListener('mouseover', function () {
    this.style = 'background-image: url(./elf.jpg)'

})
img.addEventListener('mouseout', function () {
    this.style = 'background-image: url(./kawai.jpg)'
})