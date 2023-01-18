/* * Вычислить факториал числа используя рекурсию  */

let count = 5;

/* function test(count_) {
    if (n === 1) return n
    return count_ * test(count_ - 1) // 5*4*3*2*1
}

let result = test(count);
console.log(result); */

function doFactorial(count_) {
    if (count_ === 1) {
        return count_
    }
    return count_ * doFactorial(count_ - 1);
}
let result = doFactorial(count);

console.log(result);
