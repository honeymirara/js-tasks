// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения суммы всех элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// сумму всех элементов массива

const arr = [1, 2, 3, 4, 5];

const doSum = (numbers) => {
    const result = numbers.filter(elem => !isNaN(elem));
    return true;
}

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);

