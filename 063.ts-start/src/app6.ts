// . Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.

let str6: string = prompt('entire word ');

// if (str6 === str6.split('').reverse().join('')) {
//     console.log('yes, this is polyndrom');
// } else {
//     console.log('no, this is not a polyndrom');
// }

alert(str6 === str6.split('').reverse().join('') ? 'yes, this is polyndrom': 'no, this is not a polyndrom')
