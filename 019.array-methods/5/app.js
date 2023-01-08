// На входе 10 элементов. Из элементов составить 2 массива по 5 элементов. Далее
// необходимо сравнить массивы. Если они идентичны, то вывести булевое true, в
// противном случае false. forEach

//1-ый способ

let num = 10;
let arr = [];
let array = [];


for (let i = 0; i < num; i++) {
    if (i < 5) {
        arr.push(prompt());
    } else {
        array.push(prompt());
    }
}

//[1, 2, 3, 4, 5]
//[5, 4, 3, 2, 1]

arr1.sort();
arr2.sort();

let str1 = arr1.join('');
let str2 = arr2.join('');
//'12345'

if (str1 === str2) {
    console.log('массивы идентичны');
} else {
    console.log('элементы массива не совпадают');
}



// 2-ой способ
let value = 10;
let arr1 = [];
let arr2 = [];
let count = 0;


for (let i = 0; i < value; i++) {
    if (i < 5) {
        arr1.push(prompt());
    } else {
        arr2.push(prompt());
    }
}

arr1.forEach(function (el, index) {
    if (arr2.includes(el)) {
        count += 1;
    }
})

if(arr1.length === count && arr2.length === count) {
    console.log('идентичны')
}