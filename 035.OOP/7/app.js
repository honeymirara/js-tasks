/* Реализуйте класс ServerById. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая:
middleware -> controller -> service -> repository, где:
middleware – функция валидатор
controller – функция, принимающая данные. Принимает json
service – функция проверки на то что с repository вернулось значение
repository – функция, симулирующая БД. Хранит массив данных. Взаимодействие с
этим массивом осуществляется только в repository. Массив находится в
приложении
Задание:
на вход подается JSON вида:
`{
"id": "javascript"
}`
Необходимо вывести в консоль найденный элемент массива по id если таковой
имеется. В противном случае бросить исключение. Добавить проверки  */

class ServerById {
    controller(object) {
        try {
            const data = this.service();
            return data;
        } catch (error) {
            return error.message;
        }
    }
    service(object) {
        const data = this.repository();
        return data;

    }

    repository(object) {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ]

        const filtered = array.filter((elem) => elem.id == object.id);
        if (filtered.length == 0) throw new Error(`Такого айди нет`)
        return filtered;
    }
}

const object = {
    "id": "javascript",
}

const serverById = new ServerById();
const result = serverById.controller();
console.log(result);