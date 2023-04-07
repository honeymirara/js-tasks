/* Реализуйте класс Server, получающий объект из предыдущего задания и
сохраняющий его в «БД» (массив). Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении */

class Server {

    middleware = () => {

    }
    controller = (object) => {

    }

    service = () => {
        const data = this.repository(object);
        return data;

    }

    repository = () => {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];
    }
}