/* На вход подается строка в виде электронной почты пользователя. Необходимо
написать регулярное выражение для данной строки. Если же строка подходит под
регулярное выражение, то вывести булевое true, в противном случае бросить
исключение и обработать */

const string = 'google@gmail.com';

function isValid(string_) {
    try {
        if (!/^[a-z]+@[a-z]+\.[a-z]{1,5}$/gm.test(string_)) throw new Error('string is not valid')
        return true
    } catch (err) {
        return err.message;

    }
}
let result = isValid(string);
console.log(result);
