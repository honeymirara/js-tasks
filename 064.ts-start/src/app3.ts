/* На входе динамичный массив чисел. Используя reduce выведите сумму чисел
массива */

let arr3: number[] = [];

const n = +prompt();

for (let i: number = 0; i < n; i++) {
    arr3.push(+prompt());
};

let result3 = arr3.reduce((sum, el) => {
    return sum + el;
}, 0);

console.log(result3);