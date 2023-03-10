/* Полиморфизм. Реализуйте класс NumberArray. NumberArray хранит функцию
multArr, которая заполняет и возвращает массив из 5 рандомных элементов.
Класс ConsoleArray является производным по отношению к базовому,
родительскому NumberArray и содержит функцию multArr. Необходимо
переопределить multArr из базового класса записав в переменную используя
метод super. Далее посчитать произведение всех элементов массива используя
reduce */

class NumberArray {
    multArr() {
        let arr = [];
        for (let i = 0; i < 5; i++) {
            return arr.push(Math.floor(Math.random() * 100));
        }
        return arr;
    }
}


class ConsoleArray extends NumberArray {
    multArr() {
        super.multArr();
        let summary = arr.reduce(function (sum, el) {
            return sum * el;
        }, 0)

    }
}

const consoleArray = new ConsoleArray;
console.log(consoleArray.multArr());