/* Реализуйте функцию searchBinary, которая принимает 2 параметра: значение 3 и
массив [1, 2, 3, 4, 5]. Функция возвращает индекс, где значение встречается в
массиве, если найдено. Если значение не найдено, возвращается сообщение об
ошибке.  */

let a = 3;
let b = [1, 2, 3, 4, 5];

function searchBinary(a_, b_) {
    let start = 0;
    let end = arr_.length - 1;

    for (let i = 0; i < end; i++) {
        let middle = Math.round((end + start) / 2);

        if (arr_[middle] == a_) {
            console.log('Вы угадали');
            break
        } else if (arr_[middle] < a_) {
            middle = start
            console.log('число меньше');
        } else if (arr_[middle] > a_) {
            middle = end;
            console.log('число больше');
        }
    }


}