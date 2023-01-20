//  Напишите функцию, генерирующую надежный пароль. (Math.random)
// function generatePwd(x) {
//     let arr = [];
//     while (arr.length != 8) {
//         let random = Math.random() * 10;
//         arr.push(Math.floor(random));
//     }
//     return arr;

// }

// let pwd = generatePwd();
// console.log(pwd.join(''));


/* 2-ой способ рекурсия
function generatePwd(el) {
    let rnd = Math.floor(Math.random() * 10)
    if (el === 0) return String(rnd)
    return String(rnd) + generatePwd(el - 1)
}

let a = generatePwd(8)
console.log(a);
 */



/* 3 - ий способ замыкание */

function wrapper() {
    let pwd = ''
    return function () {
        const rnd = String(Math.floor(Math.random() * 10))
        pwd += rnd
        console.log(rnd);
    }

}

const wrap = wrapper();