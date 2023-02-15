/* По условию задачи даны инпут и кнопка. Пользователь вводит в инпут значения и
по нажатию на кнопку формирует массив. Необходимо вывести среднее значение
этого массива */

const input = document.querySelector('input');
const avg = document.querySelector('.avg');
const array = document.querySelector('.array');
const button = document.querySelector('button');
let arr = [];

button.addEventListener('click', function () {
    try {
        if (!input.value) throw new Error('input is empty');
        arr.push(input.value);

        array.innerHTML = arr;

        let sum = arr.reduce ( function(start, elem){
            return start + Number(elem);
        }, 0);

        avg.innerHTML = sum / arr.length;
        input.value = '';
    } catch (error) {
        alert(error.message)
    }

})

