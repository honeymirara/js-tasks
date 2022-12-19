// На вход программе подается строка. Преобразуйте первую букву каждого слова
//  строки в верхний регистр (for)
const string = "html css js";
let finalString = string.split(" ");
let res = "";
console.log(finalString);

for (let i = 0; i < string.lenght; i++) {
    res += string[i][0].toUpperCase() + string[i].slice(1) +" ";
}
console.log(res); 