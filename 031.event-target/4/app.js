/* По двойному клику на кнопку изменить цвет кнопки */
let element = document.querySelector('.button');
let flag = true;

element.addEventListener('dbclick', function () {
    this.style = 'background-color: red';

    if (flag == false) {
        this.style = 'background-color:red';

    } else {
        this.style = 'background-color: white';
    }
})