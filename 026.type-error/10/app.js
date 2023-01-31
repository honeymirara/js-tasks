/* На вход подается строка в виде электронной почты пользователя. Необходимо
найти в данной почте “@”. Если же есть, то вывести булевое true, в противном
случае бросить исключение и его обработать */

let string = 'google@gmail.com'.split('');

function find(elem) {
    try {
        if (elem.includes('@')) {
            return true;
        }
        else throw new Error('Ошибка');
    
    } catch (err) {
        return err.message;
    }
}

let result = find(string);
console.log(result);