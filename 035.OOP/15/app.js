/* Реализуйте класс ServerDelete. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между методами
следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в приложении
Задание:
на вход подается JSON вида:
`{
"id": "javascript"
}`

Необходимо осуществить удаление по id. Если совпадения нет – ошибка. Добавить
проверки */

class ServerDelete {
    controller() {
        try {
            const data = this.service();

        } catch (error) {
            return error.message;
        }
    }
    service() {
        const data = this.repository();
        return data;
    }
    repository() {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]
        return array;

    }

}
const object = JSON.parse(`{
    "id" : javascript"

}`)

const serverDelete = new ServerDelete(object);
const result = serverDelete.controller;
console.log(result);