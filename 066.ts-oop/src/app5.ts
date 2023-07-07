/* Создайте класс Rectangle, который содержит свойства width (ширина) и height
(высота), а также метод getArea(), который возвращает площадь прямоугольника
(ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь */

/* class Rectangle5 {
    width: number;
    height: number;

    getArea(): number {
        return this.width * this.height
    }
}

let rectangle5 = new Rectangle5();
rectangle5.height = 10;
rectangle5.width = 5;
console.log(rectangle5.getArea()); */

class Recatangle5 {
    width: number;
    height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

let rectangle5 = new Recatangle5(10, 5);
console.log(rectangle5.getArea());




