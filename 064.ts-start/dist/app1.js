/* Создайте массив чисел и найдите сумму всех нечетных элементов в массиве */
let arr1 = [1, 2, 3, 4, 5];
let filtered1 = arr1.filter(function (elem) {
    return elem % 2 == 1 ? true : false;
});
let result1 = filtered1.reduce(function (sum, elem) {
    return sum + elem;
}, 0);
console.log(result1);
