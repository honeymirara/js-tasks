/* Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
controller, service, repository. Цепочка взаимодействия между методами
следующая: controller -> service -> repository, где: Задание:
Необходимо вывести в консоль массив из репозитория
*/

interface iServer {
    controller(): number[];
    service(): number[];
    repository(): number[];
}

class ServerGetAll12 implements iServer {
    controller(): number[] {
        const data1: number[] = this.service()
        return data1;
    }

    service(): number[] {
        const data2: number[] = this.repository();
        return data2;
    }

    repository(): number[] {
        const data3: number[] = [1, 2, 3, 4, 5];
        return data3;
    }
}

const serverGetAll2 = new ServerGetAll12();
console.log(serverGetAll2.controller());
