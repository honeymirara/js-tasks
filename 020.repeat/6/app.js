// Посчитать количество согласных в строке. В задаче необходимо хоть как-то
// затронуть forEach
let value = prompt('введите длину массива');
let arr = [];

for (let i = 0; i < value; i++) {
    let n = prompt('введите значение');
    arr.push(n);
}

let counter = 0;
arr.forEach(function (elem) {
    if (elem === 'a' || elem === 'e' || elem === 'i' || elem === 'o' || elem === 'u') {
        return null;
    } else {
        ++counter;
    };
});
console.log(counter);






