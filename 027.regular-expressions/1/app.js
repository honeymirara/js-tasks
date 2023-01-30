/* На вход подается строка в виде числа. Необходимо написать регулярное
выражение. Если строка состоит только из чисел, то вывести булевое true, в
противном случае бросить исключение и обработать
/^[0-9]+$/gm
 */

const string = 'a4';

function isValid(string_) {
    try {
        if (!/^[0-9]+$/gm.test(string_)) throw new Error('string is not valid')
        return true
    } catch (err) {
        return err.message;
    }
}


let result = isValid(string);
console.log(result);

