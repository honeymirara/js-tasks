/* Работа с геттерами и сеттерами. Реализуйте класс Validator. Класс содержит
getEmail, setEmail, а также метод IsEmail, проверяющий, является ли входная
строка корректным email (Если является - возвращает true, если не является -
false. Вызвать из экземпляра класса методы setEmail. getEmail, isEmail */

class Validator {
    getEmail() {
        return this.email;
    }

    setEmail(mail) {
        this.email = mail;
    }

    isEmail() {
        return (/^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g.test(this.email));
    }
}

let validator = new Validator();

validator.setEmail('fish@gmail.com');

console.log(validator.getEmail());
console.log(validator.isEmail());