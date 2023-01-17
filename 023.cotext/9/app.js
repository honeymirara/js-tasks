/* На входе динамичный массив; число n с клавиатуры. Необходимо написать
функцию, возвращающую элементы массива, которые больше указанного числа.
[1, 9, 45, 11, 10], 10 -> 45, 11
    */
const n = prompt('введите кол-во элементов');
const a = prompt('введите a');
const doArray = (n) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        let elem = prompt('введите элементы');
        arr.push(elem);
    }
    return arr;
}
const filterArr = (array, a) => {
    let data = array.filter(function elem) {

    }
}

 const array = doArray(n);
