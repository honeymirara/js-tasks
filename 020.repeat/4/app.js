// Палиндром. Сравнить с развернутой строкой не используя reverse. For
// let str = prompt('введите строку');
// let temp = '';
// for (let i = str.length - 1; i >= 0; i--) {
//     temp += str[i];
// }

// if (temp == str) {
//     console.log('палиндром');
// } else {
//     console.log('не палиндрои');
// }

//2-ой способ

let str = prompt('введите строку');
let temp = '';
for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
}
switch (temp) {
    case str:
        console.log('палиндром');
        break;
    default:
        console.log('не палиндром');
        break;
}


