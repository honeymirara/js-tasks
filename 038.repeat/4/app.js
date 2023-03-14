/* Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
Напишите класс Person с атрибутами данных для имени, фамилии. Затем
напишите класс Customer, который является подклассом класса Person. Класс
Customer должен иметь поле телефонного номера человека. Продемонстрируйте
экземпляр класса Customer вызвав геттеры собственного класса и суперкласса */

class Person {
    name;
    surname;

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getSurname() {
        return this.surname;
    }

    setSurname(surname) {
        this.surname = surname;
    }
}

class Customer extends Person {
    phonenumber;



    getPhonenumber() {
        return this.phonenumber;
    }

    setPhonenumber(phonenumber) {
        this.phonenumber = phonenumber;
    }
}

const customer = new Customer;

customer.setName('Adrianna');
customer.setSurname('Lima');
customer.setPhonenumber('875834837');
console.log(customer.getName());
console.log(customer.getSurname());
console.log(customer.getPhonenumber());

