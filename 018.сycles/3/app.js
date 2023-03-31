// Дан массив с элементами [2, 3, 4, 5]. С помощью 3 циклов найдите произведение
// элементов этого массива.

// const arr = [2, 3, 4, 5];
// let sum = 1;
// for (let i = 0; i < arr.length; i++) {
//     sum *= arr[i];
// }
// console.log(sum);

const arr = [2, 3, 4, 5];
let sum = 1;
let i = 0;

do {
    sum *= arr[i];
    i++;
} while (i < arr.length)
console.log(sum);