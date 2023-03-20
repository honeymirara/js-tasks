/* Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая:
controller -> service -> repository, где:
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
Необходимо вывести в консоль весь массив */

class ServerGetAll {

    controller(object) {
        try {
            const data = this.service(object);
            return data
        } catch (err) {
            return err.message;
        }
    };

    service(object) {
        const data = this.repository(object);

    };

    repository(object) {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];
    };
}