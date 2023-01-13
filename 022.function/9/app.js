// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения только четных элементов массива. Если
// результат функции проверки – true, то вызывать новую функцию, возвращающую
// массив с четными элементами массива

const arr = [];

const find = (numbers) => {
    const result = numbers.filter(elem => !isNaN(elem));
    return result
}

const findNum = (numbers) => {
    const result = numbers.filter(elem => elem % 2 === 0);
    return true 
}
