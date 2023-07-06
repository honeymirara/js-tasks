/* Реализовать функцию f: при вызове f(2, 3) -> вернет 5, при вызове f(2)(3), тоже
вернет 5. Использовать каррирование */

function f(a: number, b?: number) {
    if (b && a) return a + b
    return function (b: number) {
        return a + b
    }
};

console.log(f(2, 3))//5
/* console.log(f(2)(3)); */