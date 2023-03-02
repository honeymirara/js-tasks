/* Классы Employee и ProductionWorker.
Напишите класс Employee (Сотрудник), который содержит:
• имя сотрудника;
• номер сотрудника.
Затем напишите класс ProductionWorker (Рабочий), который является подклассом
класса Employee.
Класс ProductionWorker содержит:
• номер смены (целое число, к примеру, 1, 2 или 3);
• ставка почасовой оплаты труда.
Напишите методы получатели и методы-модификаторы для каждого класса.
После того как эти классы будут написаны, напишите программу, которая создает
объект класса ProductionWorker и предлагает пользователю ввести данные по
каждому атрибуту данных этого объекта. Сохраните данные в объекте и
примените в этом объекте методы получатели, чтобы получить эти данные и
вывести их на экран.  */

class Employee {
    name;
    id;

    getName() {
        return this.name;
    }

    getId(){
        return this.id;
    }

    setName(name) {
        this.name = this.name;
    }

    setId(id) {
        this.Id = 234;
    }
}

class ProductionWorker extends Employee {
    shiftNumber;
    perHour;

    getShiftNumber() {
        return this.shiftNumber;
    }
    getPerHour() {
        return this.perHour;
    }

    setPerHour(ph) {
        this.perHour = ph;
    }
    setShiftNumber(number) {
        this.shiftNumber = 5;
    }


}

let productionWorker = new ProductionWorker();
productionWorker.setName('J');
productionWorker.setId(99);
productionWorker.setShiftNumber('467');
productionWorker.setPerHour(100);

console.log(ProductionWorker.getName());
console.log(ProductionWorker.getId());
console.log(ProductionWorker.getShiftNumber());
console.log(ProductionWorker.get());