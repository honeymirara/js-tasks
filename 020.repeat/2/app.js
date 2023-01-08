// Найти максимальное число динамичного массива. forEach
const n = +prompt('кол-во элементов');
let arr = [];


for (let i = 0; i < n; i++) {
    let data = +prompt('введите элемент');
    arr.push(data);
}

let maxValue = arr[0];
arr.forEach(function (elem) {
    if (elem > maxValue) {
        maxValue = elem
    }
})
console.log(maxValue);
