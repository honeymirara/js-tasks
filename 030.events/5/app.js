/* Необходимо отобразить числовой инпут и кнопку. После нажатия на кнопку
необходимо получить значение из инпута. Проверить, что это число > 0. Если
проверка true, то вывести в Результат ряд Фибоначчи. Рекурсия */

let btn = document.querySelector('.regular_button');
btn.addEventListener('click', () => {
    try {
        let x = document.querySelector('input');
        if (x < 0) {
            throw new Error('<0. Повторите ввод');
        }
        let arr = [0, 1];
        for (let i = 2; i < x.value; i++) {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
        /* alert(arr); */
        let res = document.querySelector('.result');
        res.innerHTML = arr;
        x.value = '';

    } catch (err) {
        alert(err.message);
    }
})