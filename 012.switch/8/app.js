// Пользователь вводит номер месяц. Необходимо вывести пору года по номеру
// месяца (2 способа)
let month = +prompt('Введите месяц');

if (month <= 2 || month === 12) {
    console.log('Зима')
}

if (month <= 5 && month >= 3) {
    console.log('Весна');
}

if (month <= 8 && month >= 6) {
    console.log('Лето');
}

if (month <= 11 && month >= 9) {
    console.log('Осень');
}



