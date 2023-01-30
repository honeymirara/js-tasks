/* Дана строка массива чисел. Необходимо спарсить строку. Если же после того как
вы спарсили данные у вас не массив – бросить исключение. Добавить проверку
на числа. Далее вывести только те числа, которые кратны 3 */

let array = JSON.parse(`"[1, 2, 3, 4, 5]"`);

function validator(array_) {
    if (!Array.isArray(array_)) throw new Error('Это не массив');

    for (let i = 0; i < array.length; i++) {
        if (isNaN(element)) throw new Error('В массиве есть буква')

    }

}
function isValid(array_) {
    try {
        validator(array_);
        return array_.filter(el => el % 3 == 0);
    } catch (error) {
        return error.message;
    }

}
let a = isValid(array);
console.log(a);
