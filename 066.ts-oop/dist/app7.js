/* Создайте класс TodoList, который содержит свойство tasks (список задач) и методы
addTask() (добавление задачи), removeTask() (удаление задачи) и getTasks()
(получение списка задач). Создайте экземпляр класса TodoList и выполните
несколько операций. */
class TodoList {
    tasks = ['бегать', 'прыгать', 'танцевать', 'спать'];
    addTasks(title) {
        this.tasks.push(title);
        return this.tasks;
    }
    removeTasks() {
        this.tasks.pop();
        return this.tasks;
    }
    getTasks() {
        return this.tasks;
    }
}
let toDoList = new TodoList();
console.log(toDoList.addTasks('погулять'));
console.log(toDoList.removeTasks());
console.log(toDoList.getTasks());
