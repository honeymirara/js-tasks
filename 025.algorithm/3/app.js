/* Вычислите сумму массива целых чисел статичного массива используя рекурсию */
let array = [1, 2, 3, 4, 5, 6];
let count = 0;

function doSum() {
    if (count === 21) return 'done';
    count++;
    return doSum();

}

console.log(doSum());
console.log('count=', count);