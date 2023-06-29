/* Напишите программу, которая принимает строку и возвращает новую строку, в
которой каждое слово заменено на последнюю букву этого слова, а все остальные
символы остаются без изменений.
"Hello World" -> "o d“ */
let str15 = 'good morning'.split(' ');
for (let i = 0; i < str15.length; i++) {
    console.log(str15[i][str15[i].length - 1]);
}
let result15 = str15.map(function (elem) {
    return elem[elem.length - 1];
});
console.log(result15.join(' '));
