// На входе статичный объект. Необходимо вывести все четные значения объекта.
let obj = {
    1: '43',
    2: 'test',
    3: null,
    4: '23',
    5: 17
}
const temp = [];

for (let key in obj) {
    obj[key] % 2 === 1 ? temp.push(key) : null;
}

console.log(temp);