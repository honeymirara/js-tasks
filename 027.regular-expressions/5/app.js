/* На вход подается строка в виде url. Необходимо написать регулярное выражение
для данной строки. Если же строка подходит под регулярное выражение, то
вывести булевое true, в противном случае бросить исключение и обработать */

const string = 'https://supports-cats.com';

function isValid(string_) {
    try {
        if (!/^[(http|https|ftp)]+:\/\/[a-z0-9]+[-(a-z0A-Z)*_]+(\.[a-z]+)/gm.test(string_)) throw new Error;
        return true;

    } catch (err) {
        return err.message;
    }

}

let result = isValid(string);
console.log(result);
