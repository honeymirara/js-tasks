/* Реализуйте класс Singer, который будет наследовать от класса Worker. Класс
Worker состоит из: свойства Name, свойства Surname, метода GetFullName(), с
помощью которого можно вывести одновременно имя и фамилию; Класс Singer
наследует Name, Surname, также состоит из свойств Years, Birth, Style и метода
GetMoreInfo(), который выводит информацию о певце: Years, Birth, Style.
Необходимо вызвать метод GetMoreInfo */

class Worker {
    name;
    surname;


    getFullName() {
        return this.name + ` ` + this.surname;

    }

}

class Singer extends Worker {
    years;
    birthday;

}