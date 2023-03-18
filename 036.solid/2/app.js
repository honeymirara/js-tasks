/* Реализуйте класс DomHtml, который будет взаимодействовать с DOM по клику на
кнопку. Класс содержит 1 метод валидации, называемый middleware, в котором
происходит проверка на почту. Вывести true, если провека успешна */

const buttonTag = document.querySelector('button');
const mail = 'poshta@gmail.com';

class DomHtml {

    middleware() {
        try {
            buttonTag.addEventListener('click', fuction(){
                if(/[A-aZ-z0-9]+[@]+[a-z]+\.[a-z]+$/gm.test()) throw new Error'mail is invalid';
            })


        } catch (err) {
            alert(err.message);
        }
    }

}