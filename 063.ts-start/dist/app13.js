/* Создайте переменную sentence и присвойте ей строковое значение
предложения. Напишите программу, которая преобразует первую букву каждого
слова в предложении в верхний регистр. Например, для предложения "hello
world" результатом должна быть строка "Hello World" */
let sentence = 'dear diary, i cant explain..'.split(' ');
let result13 = '';
for (let i = 0; i < sentence.length; i++) {
    result13 += sentence[i][0].toUpperCase() + sentence[i].slice(1) + ' ';
}
console.log(result13);
