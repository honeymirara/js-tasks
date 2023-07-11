/* Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая: controller -> service -> repository, где: Задание:
Необходимо вывести в консоль массив из репозитория
*/
class ServerGetAll12 {
    controller() {
        const data1 = this.service();
        return data1;
    }
    service() {
        const data2 = this.repository();
        return data2;
    }
    repository() {
        const data3 = [1, 2, 3, 4, 5];
        return data3;
    }
}
const serverGetAll2 = new ServerGetAll12();
console.log(serverGetAll2.controller());
