// Создать массив гласных из динамичного массива. Filter
let value = prompt('введите длину массива');
let arr = [];
for (let i = 0; i < value; i++) {
    arr.push(prompt('введите значения'));
}
let filtered = arr.filter(function (elem) {
    if (elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u') {
        return true;
    }
})
console.log(arr);
console.log(filtered);
