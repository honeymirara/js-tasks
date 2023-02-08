/* На странице расположен маркированный список. Пользователь кликает на
каждый item списка. Необъодимо отловить на какой из элементов нажал
пользователь и отобразить */

let ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
    console.log(event.target.textContent);
    const divs = document.querySelector('.show');
    this.innerHTML = event.target.textContent

});

