/* Создайте класс Calculator, который содержит методы add() (сложение), subtract()
(вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
класса Calculator и выполните несколько операций. */
class Calculator6 {
    el1;
    el2;
    setEl1(el1) {
        this.el1 = el1;
    }
    setEl2(el2) {
        this.el2 = el2;
    }
    add() {
        return this.el1 + this.el2;
    }
    substract() {
        return this.el1 - this.el2;
    }
    multiply() {
        return this.el1 - this.el2;
    }
    divide() {
        return this.el1 / this.el2;
    }
}
let calculator6 = new Calculator6();
calculator6.setEl1(1);
calculator6.setEl2(2);
console.log(calculator6.add());
console.log(calculator6.substract());
console.log(calculator6.multiply());
console.log(calculator6.divide());
