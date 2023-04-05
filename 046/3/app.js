// 3. Реализуйте класс HTML. Класс содержит методы bindOptionPlus, bindOptionMinus,
// содержащие по 1 обработчику события в каждом из методов. HTML разметка
// содержит: div с первоначальным значением 0 (счетчик), кнопку button с текстом +1,
// кнопку button с текстом -1. Задача:
// • По клику с текстом на кнопку +1 необходимо добавить в счетчик +1.
// • По клику с текстом на кнопку -1 необходимо отнять из счетчика -1. 

class HTML{
    bindOptionPlus(){
        let displayTag = document.querySelector('.display');
        let btnPlusTag = document.querySelector(".plus");
    btnPlusTag = add.EventListener('click', ()=>{
        displayTag.innerHTML = +displayTag.textContent+1;
    })
    }

    bindOptionMinus(){
        let displayTag = document.querySelector(".display");
        let btnMinusTag = document.querySelector(".minus");
    btnMinusTag = add.EventListener('click', ()=>{
        displayTag.innerHTML = +displayTag.textContent-1;
    })
    }
}

let html = new HTML();
html.bindOptionPlus();
html.bindOptionMinus();