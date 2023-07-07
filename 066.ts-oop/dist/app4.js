/* Создайте класс Student, который содержит свойства name (имя) и age (возраст).
Инициализация свойств name, age происходит в getter, setter класса. Создайте
экземпляр класса Student и выведите свойства. */
class Student4 {
    name;
    age;
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
;
const student4 = new Student4();
student4.setName('Julia');
student4.setAge(21);
console.log(student4.getName());
console.log(student4.getAge());
