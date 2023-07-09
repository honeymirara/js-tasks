/* Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классы наследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
особенностями каждого транспортного средства. (седержимое методов:
console.log) */

abstract class Vehicle {
    public abstract start(): void; // абстр функции не содержат реализации

    public abstract stop(): void;
}

class Car extends Vehicle {
    public start(): void {
        console.log('start car')
    }
    public stop(): void {
        console.log('stop car')
    }
}

class Motorcycle extends Vehicle {
    public start(): void {
        console.log('start motorcycle')
    }

    public stop(): void {
        console.log('stop motorcycle')
    }
}

let car = new Car();
let motorcycle = new Motorcycle();

car.start()
car.stop()
motorcycle.start()
motorcycle.stop()
