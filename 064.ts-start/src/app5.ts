/* Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
делятся на 2. */

let arr5: number[] = [1, 2, 3, 4, 5, 6];

let result5: number[] = arr5.filter(function (elem) {
    return elem % 3 == 0 && elem % 2 == 1 ? true : false
})

console.log(result5);