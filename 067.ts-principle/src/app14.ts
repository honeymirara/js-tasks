/* . Создайте класс Counter, который будет представлять счетчик. У класса Counter
должно быть свойство count (первоначальное значение задается сеттером) и
методы increment и decrement, которые будут увеличивать и уменьшать значение
счетчика соответственно на 1. Создайте объект класса Counter и проверьте работу
методов. */
interface iCount {
    count: number;
    setCount(count): void;
    increment(): number;
    decrement(): number;

}

class Counter implements iCount {
    count;
    setCount(count): void {
        this.count = count;
    }

    increment(): number {
        this.count += 1;
        return this.count;
    }

    decrement(): number {
        this.count -= 1;
        return this.count;
    }
}

const counter = new Counter();

counter.setCount(6);
console.log(counter.increment());
console.log(counter.decrement());