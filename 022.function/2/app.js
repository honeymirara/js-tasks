// Напишите функцию, которая принимает строку в маленьком регистре и
// возаращает строку, где каждое слово начинается с большого регистра
// hschool company -> Hschool Company 
let arr = prompt('введите строку').split(' '); //test test
const doUpperCase = (a) => {
    let result = '';
    for (let i = 0; i < a.length; i++) {
        result += a[i][0].toUpperCase() + a[i].slice(1) + ' ';
    }
    return result;

}

console.log(doUpperCase(arr));