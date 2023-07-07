/* Создайте класс Calculator, который содержит методы add() (сложение), subtract()
(вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
класса Calculator и выполните несколько операций. */

/* class Calculator6 {
    el1: number;
    el2: number;

    setEl1(el1: number) {
        this.el1 = el1
    }

    setEl2(el2: number) {
        this.el2 = el2
    }

    add() {
        return this.el1 + this.el2;
    }
    substract() {
        return this.el1 - this.el2
    }
    multiply() {
        return this.el1 - this.el2;

    }

    divide() {
        return this.el1 / this.el2
    }

}


let calculator6 = new Calculator6();
calculator6.setEl1(1);
calculator6.setEl2(2);

console.log(calculator6.add());
console.log(calculator6.substract());
console.log(calculator6.multiply());
console.log(calculator6.divide()); */

/* class Calculator6 {
    add(a: number, b: number) {
        return a + b
    }
    substract(a: number, b: number) {
        return a - b
    }
    multiply(a: number, b: number) {
        return a * b

    }

    divide(a: number, b: number) {
        return a / b
    }
}

let calculator6 = new Calculator6()

console.log(calculator6.add(10, 2));
console.log(calculator6.substract(10, 2));
console.log(calculator6.multiply(10, 2));
console.log(calculator6.divide(10, 2)); */

class Calculator6 {
    add<Type>(a: Type, b: Type) {
        if (typeof a == "number" && typeof b == "number")
            return a + b
    }
    substract<Type>(a: number, b: number) {
        return a - b
    }
    multiply(a: number, b: number) {
        return a * b

    }

    divide(a: number, b: number) {
        return a / b
    }
}

let calculator6 = new Calculator6()

console.log(calculator6.add(10, 2));
console.log(calculator6.substract(10, 2));
console.log(calculator6.multiply(10, 2));
console.log(calculator6.divide(10, 2));



