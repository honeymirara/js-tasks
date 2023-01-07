// Заполнять массив числами бесконечно до тех пор, пока длина массива не будет
// равна 5. Вывести массив в консоль (цикл for, while)
const value = 5;
let arr = [];

while (arr.length < value) {
    let n = prompt('Введите элемент');
    arr.push(n);
}
console.log(arr);