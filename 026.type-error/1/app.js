/* На входе значение. Необходимо его обработать. Если это число и оно не является
четным, бросить исключение */

const value = prompt('Введите значение');

function isValid(value_) {
    try {
        if (isNaN(value)) throw new Error('это буква');


        if (value % 2 !== 0) throw new Error('это нечетное');

        return true;
    } catch (error) {
        return error.message;
    }
}
let result = isValid(value);
console.log(result)
