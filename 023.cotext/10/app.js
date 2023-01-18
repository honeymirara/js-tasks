/* Напишите функцию, которая принимает два параметра: строку и букву. Функция
должна подсчитывать количество вхождений указанной буквы в строке. Добавить
проверки  */
let one = 'hanna';
let two = 'a';

function findTwo(one_, two_) {
    let res = 0;
    for (let i = 0; i < one_.length; i++) {
        if (one_[i] === two_) {
            res += 1;
        }
    }
    return res;
}

const count = findTwo(one, two);
console.log(count);











