/* Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на uuid, введенный в input. Вывести true, если провека
успешна.  */

class DomHtml {
    constructor() {
        this.middleware();
    }
    middleware() {
        const btn = documnent.querySelector('button');
        alert(true);
    } catch(error) {
        alert error.message;
    }
}