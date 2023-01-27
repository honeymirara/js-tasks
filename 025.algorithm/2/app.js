/* На входе строка в виде пароля. Необходимо написать функцию на проверку, что
пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
буквы, символ, длина не менее 8 символов) */
const pwd = 'jsnalsjlj';

function isValid(pwd_) {
    if (pwd_.length < 8) return 'пароль меньше 8 символов';

    let countNum = 0;
    let countStr = 0;

    for (let i = 0; i < pwd_.length; i++) {
        if (!isNaN(pwd_[i])) {
            countNum++
            constinue
        } else {
            countStr++
            continue
        }
    }


}
if (countNum == 0) return 'Чисел нет';
if (countStr == 0) return 'Букв нет';


let result = isValid(pwd);
console.log(result);