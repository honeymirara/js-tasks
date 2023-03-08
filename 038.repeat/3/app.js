/* Отобразить в div массив из 15 рандомных значений от 0 до 100. Необходимо
распознать по какому из значений контейнера производится событие клика. Если
клик происходит, то удалить данное значение из массива в div */
let arr = [];

(function () {
 for (let i = 0; i < 15; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }

    showElemnts();

}())

document.querySelector('div').addEventListener('click', function (event) {
    console.log(event.target);
    arr = arrFilter;
    showElemnts(arrFilter);
})

function showElemnts() {
    document.querySelector('');
    for (let i = 0; i < arr.length; i++) {
        const newP = documnet.createElement('p');
        newP.innerHTML = arr[i];
        document.querySelector('div').appendChild(newP)
    }

}