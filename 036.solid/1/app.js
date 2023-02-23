/* Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 4 метода: doPlus, doMinus, doMultiply, doDivide */
class DomHtml {
    constructor() {
        this.generateEvent();


    } generateEvent() {
        const btn = document.querySelector('button');
        btn.addEventListener('click', function ();
        const inp1 = document.querySelector('.inp1');
        const inp2 = document.querySelector('.inp2');
        this.doPlus(inp1, inp2);
        this.doMinus(inp1, inp2);
        this.doMultiply(inp1, inp2);
        this.doDivide(inp1, inp2);
   )
    }
    doPlus(inp1, inp2) {
        const plus = document.querySelector('.plus');
        plus.innerHTML = +inp1.value + +inp2.value
    }
    doMinus(inp1, inp2) {
        const minus = document.querySelector('.plus');
        minus.innerHTML = +inp1 - +inp2;
    }
    doMultiply(inp1, inp2) {
        const multiply = document.querySelector('.multiply');
        multiply.innerHTML = +inp1 * +inp2;
    }
    doDivide(inp1, inp2) {
        const divide = document.querySelector('.divide');
        divide.innerHTML = +inp1 / +inp2;
    }
}

let domHtml = DomHtml();