// Пользователь вводит имя фамилию. Необходимо создать функцию
// возвращающую строку вида «Привет, {имя} {фамилия}»
let name = prompt('введите имя');
let surname = prompt('введите фамилию');

const doSum = (a, b) => {
    return `Привет, ${a} ${b}`;
}

console.log(doSum(name, surname));