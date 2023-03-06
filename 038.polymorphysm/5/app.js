/* Реализуйте Validation – производный класс, базовый – StringValue.
Класс StringValue состоит из: свойствa value в конструкторе; метода getValue(),
возвращающего данное value (геттер);
Класс Validation наследует value в конструкторе при помощи метода super и
дополнительно принимает и дополняет конструктор свойством: confirmValue;
класс Validation включает метод getValue(), который переопределяет метод
базового класса записывая возвращаемое значение функции класса родителя в
переменную и расширяет данный метод проверкой, что передаваемое значение
value в конструктор – строка и состоит из букв. Также добавить проверку на
равенство value и confirmValue
Необходимо вызвать метод getValue из 2 экземпляров validation, stringValue */

class StringValue {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        console.log(this.value);
    }
}

class Validation extends StringValue {
    constructor(value, confirmValue) {
        super(value, confirmValue)
        this.confirmValue = confirmValue;
    }
    getValue() {
        super.getValue();
        try {
            if (typeof value == 'string');
            console.log(this.value, this.confirmValue);
        } catch (err) {
            alert(err.message);
        }
    }
}

const stringValue = new StringValue('hi');
stringValue.getValue();
console.log('----');
const validation = new Validation('hello', 'bye');
validation.getValue();

