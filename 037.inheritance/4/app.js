/*
Реализовать следующие классы Круг, Треугольник и Квадрат, которые наследуются от Figure. 
Каждый экземпляр класса должен содержать свойства Площадь и Имя.
 Вывести всю информацию о фигурах в консоль. Площадь должна рассчитываться по математическим формулам.

Класс Figure содержит поля: 
p = 3,14
r = radius
a = side
h = height

Дочерние классы содержат геттеры на получение площади*/

class Figure {
    r;
    p = 3.14;
    a;
    h;
    name;

    setR(radius) {
        this.r = radius;
    }

    setA(side) {
        this.a = side;
    }
    setH(height) {
        this.h = height;
    }

    setName(name) {
        this.name = name;
    }
}

class Circle extends Figure {

    getSquare() {
        return `${this.name}: ${this.p * this.r ** 2} `;
    }
}


class Triangle extends Figure {

    getSquare() {
        return `${this.name}: ${1 / 2 * this.a * this.h}`;
    }
}

class SquareFigure extends Figure {
    getSquare() {
        return `${this.name}: ${this.a ** 2}`;
    }
}

 let circle = new Circle();
circle.setR(3);
circle.setName('circle');
console.log(circle.getSquare());

console.log('----'); 

let triangle = new Triangle();
triangle.setA(4);
triangle.setH(7);
triangle.setName('triangle');
console.log(triangle.getSquare());

console.log('----');

let squareFigure = new SquareFigure();
squareFigure.setA(6);
squareFigure.setName('squareFigure');
console.log(squareFigure.getSquare());





