/* На входе динамичный массив строк. Используя forEach создайте новый массив из
элементов, каждое значение которого имеет вид !name
[“hschool”, “company”] -> [“!hschool”, “!company”] */

let arr15: string[] = ['hschool', 'company'];
/* 
let result15: string[] = arr15.map((el: string) => `!${el}`)

console.log(result15); */

let result15: string[] = [];

arr15.forEach((el: string) => {
    result15.push(`!${el}`)
});

console.log(result15);
