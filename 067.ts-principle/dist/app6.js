/* Создайте класс ArrayAnalyzer, который будет иметь массив чисел как поле класса
(хначение инициализируется через конструктор класса), методы getAverage,
getMax, getMin для вычисления среднего значения, максимального и
минимального элементов массива. */
class ArrayAnalyzer_abstr {
}
class ArrayAnalyzer extends ArrayAnalyzer_abstr {
    array;
    constructor(array) {
        super();
        this.array = array;
    }
    getAverege() {
        return this.array.reduce((acc, el) => acc + el, 0) / this.array.length;
    }
    getMax() {
        return Math.max(...this.array);
    }
    getMin() {
        return Math.min(...this.array);
    }
}
let arrayAnalyzer = new ArrayAnalyzer([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(arrayAnalyzer.getAverege());
console.log(arrayAnalyzer.getMax());
console.log(arrayAnalyzer.getMin());
