/* На вход подается строка в виде пароля. Необходимо написать регулярное
выражение для данной строки. Если же строка подходит под регулярное
выражение, то вывести булевое true, в противном случае бросить исключение и
обработать.
Пароль должен содержать:
• Буквы в UPPER регистре
• Буквы в LOWER регистре
• Числа
• Специальные символы
• Длина не менее 8 символов */

let pass = prompt('Введите пароль');

function isValid(pass_) {
    try {
        if (!/^[[a-zA-Z^\d]{8,20}$/gm.test(pass_)) throw new Error('Пароль не надежный')
        return true;
    } catch (err) {
        return err.message;
    }
}

let result = isValid(pass);
console.log(result);
