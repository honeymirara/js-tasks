/* У вас есть 3 инпута. Необходимо вывести в результат конкатенацию всех инпутов */
const inpTagOne = document.querySelector(".first-input");
const inpTagTwo = document.querySelector(".second-input");
const inpTagThree = document.querySelector(".third-input");
const buttonTag = document.querySelector("button");
const outPutTag = document.querySelector(".outPut")

buttonTag.addEventListener("click", () => {
    outPutTag.innerHTML = inpTagOne.value + inpTagTwo.value + inpTagThree.value;
})

