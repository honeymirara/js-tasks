// На вход подается строка, необходимо перевернуть строку используя цикл for
let str = "One Str";
let finalStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    finalStr += str[i];

}
console.log(finalStr);
