//  Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести текущую строку в большом регистре
let str = prompt('Введите строку');

if (isNaN(str)) {
    console.log(str.toUpperCase());
} else console.log('error');
