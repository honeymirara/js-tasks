// На вход подается строка в виде электронной почты. Необходимо вырезать все
// символы до «@»
// test@gmail.com -> test

const str = "test@gmail.com";
console.log(str.slice(0, 4));