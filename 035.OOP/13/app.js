/* Реализуйте класс ServerPost. Обязательными функциями считаются функции
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
"label": "JavaScript", "category": "programmingLanguages", "priority": 1
}`
Неоходимо добавить в массив БД объект только в том случае, если нет совпадений
по label. Если совпадения нет, то в объект клиента добавить ключ id со значением
label в toLowerCase таким образом, чтобы в БД был запушен объект вида
{"id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1}
Если совпадение есть – ошибка. Добавить проверки  */

class ServerPost {
    controller(object) {
        try {
            const data = this.service(object);
            return data;
        } catch (error) {
            return error.message
        }
    }
    service(object) {
        const data = this.repository(object);
        return data;
    }

    repository(object) {
        const array = [
            { "id": "javascript", "label": "JavaScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "typescript", "label": "TypeScript", "category": "programmingLanguages", "priority": 1 },
            { "id": "sql", "label": "SQL", "category": "programmingLanguages", "priority": 2 },
            { "id": "java", "label": "Java", "category": "programmingLanguages", "priority": 3 },
            { "id": "go", "label": "GO", "category": "programmingLanguages", "priority": 3 }
        ];

        const filtered = array.filter((elem) => elem.id === object.id);
        if (filtered.length > 0) throw new Error(`this label is exist`)
        array.push({id:object.label.toLowerCase(), ...object});
        return array;

    }

}
const object = {
    "label": "JavaScript",
    "category": "programmingLanguages",
    "priority": 1
};


let serverPost = new ServerPost();
let result = serverPost.controller(object);
console.log(result);