/* На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
заполняет массив. Необходимо создать массив только из чисел. */

let tuple7: (number | string)[] = [];
const n6: number = 5;

for (let i: number = 0; i < n6; i++) {
    const element = prompt();
    if (!isNaN(+element))
        tuple7.push(+element);
    console.log(tuple7);
};

console.log(tuple7)



