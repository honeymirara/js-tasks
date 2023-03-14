/* Реализуйте класс ServerById. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая:
controller -> service -> repository, где:
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
на вход подается JSON вида:
`{
"id": 1
}`
Необходимо вывести в консоль найденный элемент массива по id если таковой
имеется. В противном случае бросить исключение. Добавить проверки  */

class ServerById {
    middleware() {
        try {

        } catch (err) {
            alert(err.message);
        }
    };
    controller();
    service();
    repository() {
        let data = [
            { "id": 1, "email": "yesenia@mail.ru" },
            { "id": 2, "email": "hanna@mail.ru" },
            { "id": 3, "email": "stanislau@mail.ru" },
            { "id": 4, "email": "german@mail.ru" },
            { "id": 5, "email": "maria@mail.ru" }
        ];
    };
}