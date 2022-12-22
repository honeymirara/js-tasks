// На вход подается число. Необходимо вывести все числа от 1 до введенного числа
// кратные 3. 

let a = 42;

if (!isNaN(a)) {
    a = +a;
    console.log(typeof a);
    for (let i = 0; i < 0; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
} else {
    console.log("error");
}