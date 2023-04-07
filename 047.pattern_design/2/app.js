/* Вы вводите числа в поле для ввода формируя массив.
Необходимо отобразить массив, а также отдельно
все четные элементы этого массива и нечетные */

const buttonTag = document.querySelector('button');
const inputTag = document.querySelector('inpit');
const arrayTag = document.querySelector('.array');
const chetArrTag = document.querySelector('.chetArrTag');
const everyInp = [];

buttonTag.addEventListener('click', () => {
    everyInp.push(inputTag.value);
    arrayTag.innerHTML = everyInp;
    const filtered = everyInp.filter(el => el % 2 === 0);
    chetArrTag.innerHTML = filtered;
});
