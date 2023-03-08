/* Реализуйте класс Calculator, который будет содержать метод doSqrt,
возвращающий корень числа принимаемого в параметрах.  */

class Calculator {

    doSqrt(number) {
        return Math.sqrt(number);

    };

}

const calculator = new Calculator();
console.log(calculator.doSqrt(8));