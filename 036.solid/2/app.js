/* Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на почту. Вывести true, если провека успешна */

const buttonTag = document.querySelector('button');

class DomHtml {

    middleware() {
        try {
            buttonTag.addEventListener('click', fuction())


        } catch (err) {
            alert(err.message);
        }
    }

}