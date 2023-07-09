/* Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
информацию о фрукте, где title = яблоко. */

interface iFruit {
    id: number;
    title: string;
    price: number;
}

abstract class Fruit3 {
    abstract array: iFruit[]
}

class Apple extends Fruit3 {
    array: iFruit[] = [{ id: 1, title: 'apple', price: 15 }, { id: 2, title: 'banana', price: 20 }];
    getAppleInfo(): iFruit[] {
        return this.array.filter((el: iFruit) => {
if(el.title == 'apple') return el
        })
    }
}

let apple3 = new Apple();
console.log(apple3.getAppleInfo())