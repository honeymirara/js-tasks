// 11. У вас есть массив из строк, чисел и иных примитивов. Необходимо создать новый
// массив, заполненный только числами первоначального массива
const arr = [1, 2, 6, 'dvsf', 5, true, null, 'sfdsj'];
const final_arr = [];

for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] === 'number'){
        final_arr.push(arr[i]);
    }
}

console.log(final_arr);