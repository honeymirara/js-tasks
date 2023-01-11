// На входе статичный объект. Необходимо вывести все числовые значения.

const obj = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
}

for (let key in obj) {
    // if (obj[key] % 2 === 0) {
    //     console.log(obj[key]);
    // }
    obj[key] % 2 === 0 ? console.log(obj[key]) : null;
}
