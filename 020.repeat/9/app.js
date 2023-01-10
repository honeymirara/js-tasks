// На вход программе подается строка текста, вида “xxxx-xx-xx”. Разбить на массив.
// Преобразуйте эту дату в формат “xx/xx/xxxx”. Как вы думаете, что здесь применить:
// map, forEach, filter?


const str = prompt('').split('');
const arr = [];
console.log(str.filter(char => char !== '-').join('/'));


