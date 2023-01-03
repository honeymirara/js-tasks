// Пользователь вводит число: 1, 2, 3 или 4. Если это значение '1', то вывести в консоль
// 'зима', '2' – 'весна' и так далее. Добавить проверку на ввод только чисел. Решите
// задачу через switch-case. 
const value = +prompt("Enter the number: ");

if (isNaN(value)) {
    console.log('Error');
}

switch (value) {
    case 1:
        console.log(`${value} -> Зима`)
        break;
    case 2:
        console.log(`${value} -> Весна`)
        break;
    case 3:
        console.log(`${value} -> Лето`)
        break;
    case 4:
        console.log(`${value} -> Осень`)
        break;
}