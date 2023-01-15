/* Напишите функцию, которая принимает массив чисел и находит минимальное и
максимальное числа соответственно. Добавить проверки на ввод и если значения
массива не соответствуют условию задания, вывести сообщение об ошибке.  */



const arr = [0, -5, 21, 45, 6, -45];

const validation = (array) => {
    let counter = 0;
    array.forEach((elem) => isNaN(elem) ? counter++ : null);
    return counter > 0 ? false : true;
};

const findMinMaxElelments = (array) => {
    const result = validation(array);
    if (result === true) {
        let max = array[0];
        let min = array[0];

        array.forEach((elem) => {
            elem > max ? max = elem : null;
            elem < min ? min = elem : null;
        });
        return `min ${min} and max: ${max}`;
    } else {
        return false;
    }
};

console.log(findMinMaxElelments(arr));
