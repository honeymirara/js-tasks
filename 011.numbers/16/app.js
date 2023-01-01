// Пользователь вводит с клавиатуры число. Найдите корень введенного числа (если
//     же результат – число с плавающей точкой, то округлить до 2 знаков после запятой)

const a = +prompt('Введите значение');
const sqrt = +Math.sqrt(a);

if (Number.isInteger(sqrt)) {
    console.log(sqrt);
} else console.log(sqrt.toFixed());