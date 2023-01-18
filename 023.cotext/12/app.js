/*  Работа с замыканием. Напишите функцию, каждый вызов который будет
генерировать случайные числа от 1 до 100, но так, чтобы они не повторялись, пока
не будут перебраны все числа из этого промежутка. */

function wrapper() {
    return function () {
        let random = Math.random() * 100;
        return Math.floor(random);
    }

}
let wrap = wrapper();
/* let arr = [];
while (arr.length !== 100) [
    let temp = wrap();
    if ()
] */
wrap();
wrap();

