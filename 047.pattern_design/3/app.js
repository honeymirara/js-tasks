/* Вы вводите числа в поле для ввода формируя и отображая массив.
Необходимо также отображать только уникальные значения массива
[1, 1, 4, 2, 3, 3] -> [4, 2] */

const inp = document.querySelector(".inp");
const buttonTag = document.querySelector("button");
const arrHTMLTag = document.querySelector(".arr");
const uniqueTag = document.querySelector(".unique");

let arr = [];
buttonTag.addEventListener("Click", ()=> {
    let arrUnique = [];
    arr.push(inp.value);
    arrHTMLTag.innerHTML = ` массив ${arr}`;

    for(let i = 0; i<arr.length; i++){
        if (arr[i] != arr[i +1] && arr[i] != arr[i-1]){
            arrUnique.push(arr[i])
        }
    }

    uniqueTag.innerHTML = `unique : ${arrUnique}`;
})