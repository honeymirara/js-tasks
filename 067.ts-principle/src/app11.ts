/* Создайте абстрактный класс University, который содержит абстрактный метод
getStudentById и поле students – массив объектов. Student – класс наследник,
реализующий абстрактный метод getStudentById. */


interface iStudents {
    id: number;
    name: string;
}

abstract class University {
    abstract students: iStudents[];

    abstract getStudentsById(id: number);
}

class AnotherUni extends University {
    students: iStudents[] = [{ id: 10, name: 'Julia' }, { id: 11, name: 'Lia' }];
    getStudentsById(id: number) {
        return this.students.filter((el: iStudents) => el.id == id)
    }
}

let uni = new AnotherUni();
console.log(uni.getStudentsById(11));
