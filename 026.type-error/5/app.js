/* На вход подается число n – количество элементов массива. Необходимо
заполнить массив случайными элементами. Если значение массива находится в
диапазоне 10<n< 100, то занести в новый массив. Добавить проверки и обработать
их. Обратите внимание, тут как минимум 3 функции. Первая: формирование
массива. Вторая: валидация. Третья: основная логика задачи */

const n = 7;

function doArray(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(prompt('Введите значение'));
    }

    return arr;
}

function validator(arr) {
    if (!Array.isArray(arr)) throw new Error('не массив');
    for (let elem of arr){
        if (isNaN(elem)) throw new Error ('Not a number');
    }
}

function findValidElem(arr) {
    try {
        return arr.filter(elem => elem > 10 && elem < 100);

    } catch (error) {
        return error.message;
    }

}

const array = doArray(n);