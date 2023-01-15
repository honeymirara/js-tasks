// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только числа. Вторая для получения массива с удоенными значенями каждого
// элемента. Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую массив с удвоенными элементами
const arr = [1, 2, 4, 5, 6];

const find = (numbers) => {
    const num = numbers.filter(elem => !isNaN(elem));
    if (num.length > 0) {
        return true;

    }
}

    const multiplication = (arr) => {
        const bool = valid(arr);
        if (bool === true) {
            const reduce = arr.reduce((sum, el) => sum * el, '')
            return reduce;
        } else 
            return 'тут есть строки';
        
    }

    multiplication(arr);




