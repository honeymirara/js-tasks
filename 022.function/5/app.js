// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Реализуйте 2 функции. Первая для формирования массива.
// Вторая для нахождения количества элементов массива
const str = prompt('кол-во эл-ов массива'); //10

const doArray = (count) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(prompt());
    }
    return arr;
}
const getLength = (a) => {
    return a.length;
}
const array = doArray(str);
console.log(getLength(array));