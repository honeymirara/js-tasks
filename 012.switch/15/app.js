// Пользователь вводит строку. Необходимо сделать проверку, что это не число и
// вывести длину строки
const str = prompt('Введите строку');
if (!isNaN(str)) {
    console.log('error');
} else {
    console.log(str.length);
}


