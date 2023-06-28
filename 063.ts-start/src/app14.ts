/* Напишите программу, которая удаляет все пробелы из заданной строки и
выводит результат. */


/* let str14: string[] = 'good morning'.split('');

let result14: string = '';

for (let i: number = 0; i < str14.length; i++) {
    str14.replaceAll(' ', '');
}
console.log(result14); */

let str14: string[] = 'good morning'.split(' ');


console.log(str14.join(''));

