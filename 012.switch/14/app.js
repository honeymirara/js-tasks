// Пользователь вводит 2 числа от 0 до 10. Сложите переменные так, чтобы в
// результате получилось выражение: “I’m хх". Проверки на ввод только чисел.
// Проверки на ввод чисел до 10. Если первое число – 0, то опустить его
const num1 = prompt('введите 1-ое число');
const num2 = prompt('введите 2-ое число');

if (!isNaN()) {
    console.log('error');
} else if (num1 <= 10 && num2 <= 10) {
    console.log(`i'm` num1 + num2);
} 