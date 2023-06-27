// Создайте переменную str и присвойте ей строковое значение. Используя цикл for
// выведите каждый символ строки и его индекс
let str11 = 'kotiki';
for (let i = 0; i < str11.length; i++) {
    console.log(str11[i]);
    console.log(str11.split('').indexOf(str11[i]));
}
