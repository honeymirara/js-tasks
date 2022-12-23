// Найти квадратный корень числа. Если же число без плавающей точки, то просто
// вывести его. В противном случае необходимо округлить число до целых. Добавить проверку на ввод только чисел
let value = prompt('Введите значение');
let sqrt = Math.sqrt(value);

if (isNaN(value)) {
    console.log("Error");

} else if (Number.isInteger(sqrt)) {
    console.log(sqrt);
} else console.log(sqrt.toFixed());

