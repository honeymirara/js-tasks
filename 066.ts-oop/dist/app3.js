/* Создайте класс Student, который содержит свойства name (имя) и age (возраст).
Инициализация свойств name, age происходит в конструкторе класса. Создайте
несколько экземпляров класса Student и выведите свойства. */
class Student3 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student3 = new Student3('Julia', 21);
console.log(student3.name, student3.age);
