// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите произведение всех элементов массива.
// Проверки на ввод только чисел. Использовать forEach, reduce


//1-ый способ

// let n = +prompt('введите кол-во элементов массива');
// let arr = [];
// for (let i = 0; i < n; i++) {
//     let temp = prompt('введите элемент массива');
//     arr.push(temp);


// }
// let a = 1;
// arr.forEach(function (elem) {
//     if (!isNaN(elem)) {
//         a *= elem;
//     } else {
//         console.log('не число')
//     }
// })
// console.log(a);

//2-ой способ

reduce = arr.reduce(function (acc, elem) {
    if (!isNaN(elem)) {
        return acc * elem;
    } else {
        return acc * 1;
    }
}, 1);

console.log(reduce);