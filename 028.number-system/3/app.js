/* Реализуйте функцию, которая принимает число и возвращает объект, где ключи –
каждый единичный символ числа, значение – четность / нечетность. Добавить
проверки
542613 –> { 5: “неч”, 4: “чет”, 2: “чет”, 6: “чет”, 1: “неч”, 3: “неч” } */
let str = '542613';
function validStr(str_) {
    for (let i = 0; i < str_.length; i++) {
        if (isNaN(str_[i])) throw new Error('Это буква');
    }
}

function doObject(str_) {
    try {
        validStr(str_);
        let obj = {};

        for (let i = 0; i < str.length; i++) {
            if (str_[i] % 2 == 1) {
                obj[str_[i]] = 'неч';
            } else {
                obj[str_[i]] = 'чет';
            }
        }
        return obj;

    } catch (err) {
        return err.message;
    }
}

let result = doObject(str);
console.log(result);
