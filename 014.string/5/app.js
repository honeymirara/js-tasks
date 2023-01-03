// На вход подаются 2 строки. Необходимо сравнить их и если они одинаковы, то
// вывести true, в противном случае false.
// 'string', 'StRiNg' -> true 

const str1 = 'first string'.trim().toLowerCase();
const str2 = 'second string'.trim().toLowerCase();

if (str1 === str2) {
    console.log(true);

} else console.log(false);