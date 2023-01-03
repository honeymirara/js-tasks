// На вход подаются 2 строки. Если исходная 1 строка зкаканчивается на 2 строку
// вывести true, в противном случае false

const str1 = ('Good Bye');
const str2 = ('Bye');

if (str1.includes(str2)) {
    console.log(true);
} else console.log(false);