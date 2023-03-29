// [1, 2, 3, 4, 5]. Выведите каждый элемент массива 3 любыми циклами


// arr.length = 5;

// for (let i = 0; i <= arr.length; i++) {
//     arr.push(arr[i]);
// }
// console.log(arr);

// вариант 1

// let i =1;
// while (i<=5){
//     console.log(i);
//     i++
// }

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
for (let j of arr) {
    console.log(j);
}
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}