// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо вывести true, если хотя бы 1 элемент массива –
// число. Some, forEach

const n = prompt('Введите количество эл-тов массива');
let arr = [];

while (arr.length < n) {
    let value = prompt('Введите элемент');
    arr.push(value);
}

console.log(arr.some(function (element) {
    return !isNaN(element);
}));



