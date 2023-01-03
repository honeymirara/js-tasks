// Напишите программу, которая находит полное число метров по заданному числу
// сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1
const value = prompt('Введите число');
let secondValue = (value.toFixed(1));
if (isNaN(value)) {
    console.log('Error');
} else 
 console.log(secondValue);
