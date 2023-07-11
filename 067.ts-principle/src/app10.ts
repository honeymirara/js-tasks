/* Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
Класс Validation является производным по отношению к базовому, родительскому
Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
базового класса и записать в переменную используя метод super. Далее
дополняем переопределенный метод отображением результата в console */

interface iPwd {
    showPwd(): string;
}

class Pwd implements iPwd {
    showPwd(): string {
        let pwdRandom = '';

        for (let i = 0; i < 8; i++) {
            let item = Math.round(Math.random() * 9)
            pwdRandom += item
        }
        return pwdRandom;
    }
}

class Validation extends Pwd {

    override showPwd(): string {
        let validPwd = super.showPwd();
        return validPwd;
    }
}

let pwd = new Pwd();
let validation = new Validation();

console.log(pwd.showPwd())
console.log(validation.showPwd());