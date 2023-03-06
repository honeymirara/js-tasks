/* На входе n – количество элементов массива. Далее производится заполнение
массива с клавиатуры. Необходимо создать функцию возвращающую новый
массив из отфильтрованных значений, где строка начинается на [a, h].
[“ann”, “school”, “hschool”, “borabora”] -> [“ann”, “hschool”] */

let n = prompt('enter the value:');

function doArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(prompt('enter the value:'));
    }
    return arr;
}
function filteredArray(arr) {
    try {
        isValid(arr);
        const newArr = arr.filter(elem => {
            if (elem[indexOf(0)] === 'a' || elem[indexOf(0)] === 'h') {
                return true;
            }
        })
        return newArr;
    } catch (err) {
        alert(err.message);
    }



}

function isValid(arr) {
    arr.forEach(elem => {
        if (!isNaN(elem)){
            throw new Error('Not a string');
        }
    });
}

const array = doArray(n);
const newArr = filteredArray(array);
console.log(newArr);