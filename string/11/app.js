// На вход подается строка. Ваша задача узнать является ли строка палиндромом
const str  = "яток";
let finalStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    finalStr += str[i];
}
console.log(finalStr);