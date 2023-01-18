/* Напишите функцию, принимающую в качестве параметра статичный объект.
Функция возвращает количество пар ключ / значение. IIFE
*/
let obj = {
    value_1: 34,
    value_2: 'abc',
    value_3: 53,
    value_4: 'cde'
};


/* let count = 0;
for (let key in object) {
    count += 1;
}
console.log(count); */

function doCount(obj_) {
    let count = 0;
    for (let key in object) {
        count += 1;
    }
    return count;

}
let result = doCount(obj);
console.log(result);

