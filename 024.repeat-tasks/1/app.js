// Напишите функцию, которая принимает 2 параметра и возводит первое значение
// в степень 2 параметра. Добавьте функцию проверки. Написать синтаксис 3
// функций 

// 1-ый способ с помощью метода
/* let x = prompt('Введите основание');
let n = prompt('Введите степень');

console.log(Math.pow(x, n));
 */


// 2-ой способ с помощью цикла for

/* let x = prompt('Введите осонование');
let n = prompt('Введите степень');

function doExponentiate(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

let result = doExponentiate(x, n);
console.log(result); */



// 3-ий способ решения с рекурсией 
/* let x = prompt('Введите основание');
let n = prompt('Введите степень'); */

function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
let func = pow(2,3);
console.log(func);




