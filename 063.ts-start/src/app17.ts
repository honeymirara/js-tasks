/* *Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. Проверьте есть ли в массиве элемент
со значением, равным 4. Посчитать количество повторений числа 4 в массиве */
let arr17: string[] = ['1', '2', '5', '9', '4', '13', '4', '10'];

let counter17: string = '';
for (let i: number = 0; i < arr17.length; i++) {
    let founder17: string[] = arr17.map((el) => {
        if (+el === 4) {
            return 'yes, it is'
        } else {
            return 'no, it is not'
        }
        counter17 +=
    });
}


