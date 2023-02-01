/* Реализайте функцию, которая принимает статичный массив и возвращает новый
массив с отфильтрованными значениями. Массив считается отфильтрованным,
если в нем присутствуют только числа
[ 1, 2, “a”, ”b” ] –> [ 1, 2 ]
[ 1, 2, “aasf”, “1”, “123”, 123 ] –> [ 1, 2, 123 ] */

let n_ = 5;
/* function doArray() {
    let arr = [];
    for (let i = 0; i < n; i++) {
        const element = prompt('Введите элемент');
        arr.push(element);
    }
    return arr;
} */

function filtered(array) {

    try {
        let newArr = arr.filter(el => typeof el == 'number');
        if (!newArr.length) throw new Error('массив пустой')
        return newArr;
    } catch (err) {
        return err.message;
    }
}
/* let x = filtered(doArray(n_)); */
let x1 = filtered([1, 2, 'aasf', '1', '123', 123]);
console.log(x1);