/* Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
(хначение инициализируется через конструктор класса), методы getAverage,
getMax, getMin для вычисления среднего значения, максимального и
минимального элементов массива. */

abstract class ArrayAnalyzer_abstr {
    abstract array: number[];
}

interface iArrayAnalyzer{
    array:number[];
    getAverege():number;
    getMax():number;
    getMin():number;
}

class ArrayAnalyzer extends ArrayAnalyzer_abstr implements iArrayAnalyzer{
    array: number[];

    constructor(array: number[]) {
        super();
        this.array = array
    }

    getAverege(): number {
       return  this.array.reduce((acc: number, el: number) => acc + el, 0) / this.array.length;
    }

    getMax(): number {
        return Math.max(...this.array)
    }

    getMin(): number {
        return Math.min(...this.array);

    }
}

let arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(arrayAnalyzer.getAverege());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());

