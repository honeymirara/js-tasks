/* Реализуйте класс NumberArray. NumberArray хранит функцию sumArr, которая
заполняет и возвращает массив из 5 рандомных элементов. Класс ConsoleArray
является производным по отношению к базовому, родительскому NumberArray и
содержит функцию sumArr. Необходимо переопределить sumArr из базового
класса записав в переменную используя метод super. Далее посчитать сумму всех
элементов массива */

class NumberArray {
    /*  constructor{
 
     } */
    sumArr() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            const element = Math.floor(Math.random() * 10);
            arr.push(element);
        }
        return arr;
    }
}

class ConsoleArray extends NumberArray {
    sumArr() {
        let temp = super.sumArr();
        console.log(temp);
        return temp.reduce(function (cur, next) {
            return cur + next;
        }, 0)
    }

}

let consoleArray = new ConsoleArray();
console.log(consoleArray.sumArr());