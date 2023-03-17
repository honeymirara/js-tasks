// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = prompt('enter the value:');

function doArray() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(prompt('enter the value:'));
    }
}

function newArr(arr) {
    try {
        const newArray = [];
        for (let i = 0; i < 5; i++) {
            if (arr[i] == 0 || arr[0] === '') {
                arr.push('#' + arr.value);
            }
            return newArray;
        }



    } catch (err) {
        return err.message;
    }
}

let result = newArr()
console.log(result);