/* Напишите функцию, которая принимает два параметра: строку и букву. Функция
должна подсчитывать количество вхождений указанной буквы в строке. Добавить
проверки  */

let object = {
    value1: 17,
    value2: 100,
    key1: 'string',
    key2: 'qwerty',
}

    (function () {
        let arr = [];
        for (const key in object) {
            if (typeof object[key] == 'number') {
                arr.push(key);
            }
        }
        console.log(arr);

    }())










