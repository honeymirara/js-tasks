/* Реализуйте класс ServerPost.
 Обязательными функциями считаются функции middleware, controller, service, repository.
  Цепочка взаимодействия между методами следующая:middleware -> controller -> service -> repository, 
  где:middleware – функция валидатор controller – функция, принимающая данные. 
  Принимает jsonservice – функция проверки на то что с repository вернулось значениеrepository – функция, 
  симулирующая БД. Хранит массив данных.
   Взаимодействие с этим массивом осуществляется только в repository.
    Массив находится в приложенииЗадание:на вход подается JSON вида: 
    ` { "email": “test@mail.ru", "pwd": “test" }`
    Необходимо добавить в массив БД объект только в том случае, если нет совпадений по name.
    Если совпадения нет, то в объект клиента добавить ключ id с последним возможным уникальным id БД,
     таким образом, чтобы в БД был запушен объект вида
     {"id": 6, "email": "yesenia@mail.ru", "pwd": "pwdffff" }
     Если совпадение есть – ошибка. Добавить проверки  */




class ServerPost {
    middleWare = () => { };

    controler = (object) => {
        const data = this.repository(object);
        return data;
    };
    service = (object) => {
        const data = this.repository(object)
        return data;
    };
    repository = (object) => {
        const data = [
            { "id": 1, "email": "yesenia@mail.ru", "pwd": "pwdffff" },
            { "id": 2, "email": "hanna@mail.ru", "pwd": "pwdfevcrdv" },
            { "id": 3, "email": "stanislau@mail.ru", "pwd": "pwdtest" },
            { "id": 4, "email": "german@mail.ru", "pwd": "pwdqqq" },
            { "id": 5, "email": "maria@mail.ru", "pwd": "pwdfcel" }
        ];

        const arr = data.filter(elem => elem.email !== object.email);
        if (arr.length == data, length) {
            data.push({id:data.length +1, ...object});
            arr.push({id: data.length +1, ...object});
        } else {
            throw new Error('Error');
        }
        return data;
    };
}

const newData = JSON.Parse ('{"email" : "test@mail.ru", "pwd": "test"}');
const serverPost = new ServerPost();
serverPost.serverPost.controller(newData);

