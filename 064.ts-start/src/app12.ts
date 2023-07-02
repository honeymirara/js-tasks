/* Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
позициях (индексах) массива */

let arr12: number[] = [1, 2, 3, 4, 5];
let resultArr12: number[];

for (let i: number = 0; i < arr12.length; i++) {
    if (arr12[i] % 2 == 1)
        arr12.push(arr12[i])

};

let reducedArr = arr12.reduce(function (sum, elem) {
    return sum + elem
}, 0);

console.log(reducedArr);