/* Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
Класс Validation является производным по отношению к базовому, родительскому
Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
базового класса и записать в переменную используя метод super. Далее
дополняем переопределенный метод отображением результата в console */
class Pwd {
    showPwd() {
        let pwdRandom = '';
        for (let i = 0; i < 8; i++) {
            let item = Math.round(Math.random() * 9);
            pwdRandom += item;
        }
        return pwdRandom;
    }
}
class Validation extends Pwd {
    showPwd() {
        let validPwd = super.showPwd();
        return validPwd;
    }
}
let pwd = new Pwd();
let validation = new Validation();
console.log(pwd.showPwd());
console.log(validation.showPwd());
