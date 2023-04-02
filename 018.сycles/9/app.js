// 9. Дан массив 2, 5, 9, 15, 0, 4. Выведите все числа кратные 3 циклом for of
const arr = [2, 5, 9, 15, 0, 4];
const new_arr = [];

for (let elem of arr) {
    if (elem % 3 === 0 ){
        console.log(elem);
    }
}

console.log(new_arr);