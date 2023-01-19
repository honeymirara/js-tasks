/* *Вычислите сумму массива целых чисел статичного массива используя рекурсию
 */

/* 1-ый способ
const array = [1, 2, 3, 4, 5, 6];

function doSum(array_) {
    let num = array_.reduce(function (previousValue, currentValue ) {
        return previousValue + currentValue;
    })
    return num;
};

let getSum = doSum(array);
console.log(getSum); */


// 2-ой способ
/* const array = [1, 2, 3, 4, 5];

function doSum(array_) {
    let result = 0;

    for (let i = 0; i < array_.length; i++) {
        result += array[i];
    }
    return result;
}

let getSum = doSum(array);
console.log(getSum);



 */
 // 3-ий способ

const array = [1, 2, 3, 4, 5];

function doSum(count){
    if (count === 1){
        return count 
    }
    return count + doSum(array[i]);

}  
let result = doSum(array);
console.log(result);