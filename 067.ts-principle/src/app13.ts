/* . Реализуйте класс ServerPost. Обязательными функциями считаются функции
middleware, controller, service, repository. Цепочка взаимодействия между
методами следующая: middleware -> controller -> service -> repository, где:
Задание:
на вход подается JSON вида: `{ "email": "Test", "pws": "test" }`
Необходимо добавить в массив БД объект только в том случае, если нет
совпадений по email */
interface iServer {

}

class ServerPost {
    middleware() {

    }

    controller(obj) {
        try {
            const data4 = this.service(obj);
            return data4;

        } catch (err) {
            return err.message;
        }

    }

    service(obj) {
        const data5 = this.repository(obj);
        return data5;
    }

    repository(obj) {
        const arr = [{ "email": "Test", "pwd": "test" }, { "email": "Task", "pwd": "task" }]
        let filtered = arr.filter((el) => el.email == obj.email)

        if (filtered.length > 0) throw new Error('this email already exists');
        arr.push(obj);
        return arr;
    }
};
const obj = JSON.parse(`{ "email": "Took", "pwd": "took" }`)
    let serverPost = new ServerPost();
console.log(serverPost.controller(obj));


