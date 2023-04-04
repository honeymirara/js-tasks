// 8. Дан массив с элементами [1, 2, 2, 3, 4, 4, 3, 4, 5]. Выведите каждый элемент массива
// без повторений -> [1, 2, 3, 4, 5] (for, for of)

const arr = [1, 2, 2, 3, 4, 5, 5, 2, 4, 5];
const final_arr = [];

// for (let i = 0; i<arr.length; i++){
//     if(!final_arr.includes(arr[i])){
//         final_arr.push(arr[i]);
//     }
// }

// console.log(arr);

for (let elem of arr) {
    if (!final_arr.includes(arr[i])) {
        final_arr.push(elem)
    }
}
console.log(final_arr);


