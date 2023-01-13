// На входе массив. Реализуйте 2 функции. Первая для проверки, что в массиве
// только строки. Вторая для получения суммы всех строчных элементов массива.
// Если результат функции проверки – true, то вызывать новую функцию,
// возвращающую конкатенацию всех строчных элементов массива
const a = ['asd', '445', 'crh', '7578'];

const find = (arr) => {
    const error = arr.filter(elem => !isNaN(elem));

    if (error.length > 0) {
        return false
    } else {
        return true
    }
}

const concat = (arr) => {
    const bool = valid(arr);
    if (bool === true) {
        const reduce = arr.reduce((sum, el) => sum + el, '')
        return reduce
    } else {
        return 'тут есть числа'
    }
}
    concut(a)


