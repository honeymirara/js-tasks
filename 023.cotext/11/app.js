/* Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает новый объект, где значения – исключительно числа
первоначального объекта. IIFE */

let obj = {
    value_1: 34,
    value_2: 'abc',
    value_3: 53,
    value_4: 'cde'
};
/* 
function generateNewObject(obj_) {
    let objWithNumbers = {};
    for (let key in obj_) {
        if (typeof obj_[key] === 'number') {
            objWithNumbers[key] = obj_[key]
        }
    }
    return objWithNumbers;
} 


const newObject = generateNewObject(obj);
console.log(newObject); */

const newObject = (function (obj_) {
    let objWithNumbers = {};
    for (let key in obj_) {
        if (typeof obj_[key] === 'number') {
            objWithNumbers[key] = obj_[key]
        }
    }
    return objWithNumbers;

}) (obj)
console.log(newObject);










