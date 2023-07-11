/* Создайте абстрактный класс University, который содержит абстрактный метод
getStudentById и поле students – массив объектов. Student – класс наследник,
реализующий абстрактный метод getStudentById. */
class University {
}
class AnotherUni extends University {
    students = [{ id: 10, name: 'Julia' }, { id: 11, name: 'Lia' }];
    getStudentsById(id) {
        return this.students.filter((el) => el.id == id);
    }
}
let uni = new AnotherUni();
console.log(uni.getStudentsById(11));
