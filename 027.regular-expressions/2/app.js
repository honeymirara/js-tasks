/* На вход подается строка вида “имя фамилия возраст”. Необходимо написать
регулярное выражение для данной строки. Если же строка подходит под
регулярное выражение, то вывести булевое true, в противном случае бросить
исключение и обработать 
/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,2}$/gm
*/

const string = 'Name Surn0ame 0';

function isValid(string_) {
    try {
        if (!/^[A-Z][a-z]+ [A-Z][a-z]+ [0-9]{1,2}$/gm.test(string_)) throw new Error('String is not valid')
        return true
    } catch (err) {
        return err.message;

    }
}

let result = isValid(string);
console.log(result);