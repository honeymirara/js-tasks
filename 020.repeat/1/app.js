// Сумма элементов массива динамичного массива. reduce
const n = prompt();
const arr = [];

for (let i = 0; i < n; i++) {
    arr.push(prompt('введите значение'));
}

let sum = arr.reduce(function (sum, elem) {
    return sum + elem;
}, 0)