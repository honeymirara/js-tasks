// На входе n – количество элементов массива. Далее производится заполнение
// массива с клавиатуры. Необходимо создать функцию возвращающую новый
// массив из элементов, каждое значение которого имеет вид #name.
// [“hschool”, “company”] -> [“#hschool”, “#company”]

let n = prompt('enter the value:');

function doArray(length){
    const arr = [];
    for(let i = 0; i<length; i++){
        arr.push(prompt('enter the value:'));
    }
}

function newArr(arr){

}