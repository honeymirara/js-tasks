/* Напишите программу, которая находит и выводит наиболее часто встречающийся
символ в заданной строке. */
let str14 = 'ncsncpppppp'.split('');
const obj = {};
for (let i = 0; i < str14.length; i++) {
    if (obj.hasOwnProperty(str14[i])) {
        obj[str14[i]] += 1;
    }
    else {
        obj[str14[i]] = 1;
    }
}
const values = Object.values(obj);
const max = Math.max(...values);
for (let key in obj) {
    if (obj[key] === max) {
        console.log(key);
        break;
    }
}
