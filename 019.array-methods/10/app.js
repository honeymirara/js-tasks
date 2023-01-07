// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Выведите массив строк из четност и нечетности, в
// соответствии с тестом ниже:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
// [1, 24, 5] -> [“нечет”, “чет”, “нечет”]
// Использовать map

const n = +prompt('введите кол-во эл-тов массива');
const arr = [];
for (let i = 0; i < n; i++) {
    const elem = prompt();
    if (isNaN(elem)) continue
    arr.push(+elem);
}

const newMap = arr.map(function (el) {
    if (el % 2 === 0) {
        return 'чет'
    } else {
        return 'неч'
    }
})

console.log(newMap);