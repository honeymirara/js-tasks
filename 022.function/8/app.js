// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами
const arr = [1, 2, 4, 5, 6];

const find = (numbers) => {
    const result = numbers.filter(elem => !isNaN(elem));
    return true;
}



