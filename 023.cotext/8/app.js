/* Напишите функцию, принимающую в качестве параметра строку. Необходимо
оставить в строке только униакльные символы. IIFE */
const arr = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5];
(function () {
   
    const uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }

    }
    console.log(uniqueArray);
}());



