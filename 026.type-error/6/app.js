/* Реализуйте функцию, которая принимает 3 целочисленных значения a, b, c.
Функция должна возвращать true, если можно построить треугольник со
сторонами заданной длины, и false в любом другом случае. Треугольник
существует только тогда, когда сумма двух его сторон больше третьей. Требуется
сравнить каждую сторону с суммой двух других. Если хотя бы в одном случае
сторона окажется больше либо равна сумме двух других, то треугольника с
такими сторонами не существует */

let a = 3;
let b = 3;
let c = 3;


function doTriangle(elem) {
    try {
        if (a + b > c && b + c > a && a + c > b) {
            return true;
        } else throw new Error("triangle doesn't exists");
    } catch (err) {
        return err.message;
    }
}

let result = doTriangle(a, b, c);
console.log(result);