//замыкание принцип

/* function wrapper(){
    let a = 0

    return function(data){
        a += data
        console.log(a)
    }
}

const item = wrapper()
item(10)
item(2)
item(4)  */

//Посчитайте количество вызовов функции с помощью замыкания

/* function wrapper(){
    let res = 0

    return function(){
        res += 1
        console.log(res)
    }
}

const item = wrapper()
item()
item()
item()
item() 
item() 
item()  */

//выполнить замыкание для  фунции по созданию пароля до 9 символов

/* function wrapper() {
    let pwd = ''

    return function () {
        pwd += Math.round(Math.random() * 9)
        return pwd
    }
}

const item = wrapper()
item()
item()
item()
item()
item()
item()
item()
item()
console.log(item()) */

//что такое каррирование? - Это функция, котороя преобразует количество своих входных в параметров, возращает новые функции с отдельными параметрами, это нужно чтобы ограничить область видимости для конкретных переменнных, а также для улучшения читабельности
/* 
function func(a, b, c, d) {
    console.log(a + b + c + d);
}

func(1, 2, 3, 4) */

/* function wrap(a) {

    return function (b) {

        return function (c) {

            return function (d) {

                console.log(a + b + c + d)
            }
        }
    }
}

wrap(1)(2)(3)(4) */

//что такое рекурсия? Это когда գործառույթ вызывает циклично саму же сбея



//пример рекурсии. Нв входе число n  = 2, step = 5. Возведите n в степень step используя рекурсию 


/* let n = 2;
let step = 5;

let res = 1;


function test(n, step) {
    if (step === 0) return;
    res = n + 1
    test(n, step - 1)
}

test(n, step - 1)
console.log(res) */





















// Отобразите в строке через пробел числа от 0 до 10 по возрастанию используя рекурсию


/* let res = '';
let length = 10;
n = 0

function test(n, length) {

    if (length === 0) return;
    res = n + 1

    test(n, length - 1);
}

test(n, length);
console.log(res); */

let arr = [];
let arrLength = 10;
let n = 0

function test(n, arrLength) {
    if (arrLength === 0) return;
    arr.push(n + 1)

    test(n, arrLength - 1)
}

test(n , arrLength)
console.log(res)



/* function recurse() {

    const numbersStr = ''

    function makeString(numberStr) {

    }
}
 */


/* Отобразите в строке через пробел четные числа от 5 до 0 по убыванию используя рекурсию
На входе число n = 5. Вычислите сумму натуральных чисел от 1 до n используя рекурсию
Отобразите четные числа от 5 до 0 пНа входе число n = 2, step = 5. Возведите n в степень step используя рекурсию
о убываю используя рекурсию
На входе массив array. Посчитайте количество элементов массива используя рекурсию
Вычислить факториал числа используя рекурсию
Вычислите сумму массива чисел статичного массива используя рекурсию
Реализуйте поиск максимального числа статичного массива используя рекурсию  */