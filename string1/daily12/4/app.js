// Есть значение. Добавить проверку на ввод только чисел. Если число, вывести true,
// в противном случае false (isNa
const value = prompt();

if (isNaN(value)) {
    console.log(false);
} else {
    console.log(true);
}

