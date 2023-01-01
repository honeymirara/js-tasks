// Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
// уравнения
// ax
// 2 + bx + c = 0
// Если уравнение имеет два корня, то следует вывести их в порядке возрастания.
const a = 2;
const b = +prompt();
const c = 4;

const d = b ** 2 - 4 * a * c

if (d < 0) console.log('Корней нет');
else if (d === 0) console.log(-b / (2 * a));
else {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b + Math.sqrt(d)) / (2 * a);

    if (x1 > x2) {
        console.log(x1, x2);
    } else {
        console.log(x2, x1);
    }
}


