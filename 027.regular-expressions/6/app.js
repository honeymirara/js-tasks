/* На вход подается строка вида: путь к файлу. Необходимо написать регулярное
выражение для данной строки. Если же строка подходит под регулярное
выражение, то вывести булевое true, в противном случае бросить исключение и
обработать
C:\Users\Admin\Desktop\test.txt -> true
C:/Users/Admin/Desktop/test.txt -> true */

const pathFile = 'C:\Users\Admin\Desktop\test.txt';

function isValid(elem) {
    try {
        if (!/^[A-Z]:(\\|\/)[a-zA-Z(\\|\/)]+\.[a-z]+$/gm.test(elem)) throw new Error('string is not valid')

    } catch (err) {
        return err.message;

    }
}

let result = isValid(pathFile);
console.log(result);