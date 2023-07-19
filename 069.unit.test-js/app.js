/* Написать функцию которая принимает 2 числа и возводит 1 во 2 степень.
Добавить необходимые проверки. */

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new Error('это не число');

    return a ** b;
}



/* . Написать функцию которая принимает 2 числа и возвращает результат
произведения 2 множителей. Добавить необходимые проверки.
Написать тест для функции */

function multiply(a, b) {
    try {
        if (typeof a !== 'number' || typeof b !== 'number') throw new Error('it is invalid data')
        return a * b
    } catch (err) {
        return err.message;
    }

}

/* Написать функцию которая принимает массив чисел и находит сумму всех
элементов. Добавить необходимые проверки.
Написать тест для функции */


function summary(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error('it is not array');
        if (arr.length == 0) throw new Error('this array is empty');
        let bool = arr.every(el => typeof el == 'number');
        if (!bool) throw new Error('array containg string')
        return arr.reduce((acc, next) => acc + next, 0)
    } catch (err) {
        return err.message;
    }

}

/* У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести все товары, количество которых больше 10 и произведены в Германии
Написать тест для функции */

function findProduct(arr) {
    try {
        if (!Array.isArray(arr)) throw new Error('it is not array');
        if (arr.length == 0) throw new Error('array is empty');
        let filtered = arr.filter(el => el.count > 10 && el.producer == 'Германия')
        return filtered;
    } catch (err) {
        return err.message
    }
}


/* 5. У вас есть массив строковых значений, состоящий из номеров телефонов.
Необходимо вывести значения массива без дубликатов. Добавить необходимые
проверки.
Написать тест для функции */

function uniqueNumber(arrNum) {
    try {
        if (!Array.isArray(arrNum)) throw new Error('it is not array');
        if (arrNum.length == 0) throw new Error('Array is empty');
        let uniqueNumbers = [...new Set(arrNum)]; //spread operator) разворачивает уникальные значения из множества Set в новый массив. При использовании Set дубликаты автоматически удаляются, так как он хранит только уникальные значения. 
        return uniqueNumbers;

    } catch (err) {
        return err.message;
    }
}

/* На входе статичный объект. Необходимо посчитать количество пар (ключ:
    значение) где значение число и вывести количество. Добавить необходимые
    проверки. */

function uniqueObject(object) {
    try {
        if (typeof object !== 'object' || object === null) {
            throw new Error(' is not a valid object');
        }
        let count = 0;
        for (let key in object) {
            if (typeof object[key] === 'number') {
                count++;
            }
        }
        return count;

    } catch (err) {
        return err.message;
    }
}


/* На входе статичный объект. Необходимо числовые значения удвоить на выходе.
Написать тест для функции */

function double(statObj) {
    try {
        for (let key in statObj) {
            if (typeof statObj[key] === 'number') {
                statObj[key] *= 2;
            }
        }
        return statObj;
    } catch (err) {
        return err.message;
    }
}



/*  На входе статичный объект. Необходимо сформировать массив из всх четных
значений объекта.
Написать тест для функции */

function makeArray(obj) {
    try {
        if (typeof obj !== 'object' || typeof obj === 'null') throw new Error('is not a valid object');
        let arr = []
        for (let key in obj) {

            if (typeof obj[key] == 'number' && obj[key] % 2 === 0) {
                arr.push(obj[key])
            }
        }
        return arr;

    } catch (err) {
        return err.message;
    }
}





module.exports = { sum, multiply, summary, findProduct, uniqueNumber, double, uniqueObject, makeArray };