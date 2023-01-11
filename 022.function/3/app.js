// Напишите функцию, которая принимает статичный массив строк. Необходимо
// отфильтровать значения и оставить только те, где длина строк до 2 символов.
// [“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]

let arr = ['by', 'belarus', 'de', 'ru', 'germany']; //test test
const find = (a) => {
    const result = a.filter(elem => elem.length <= 2);
    return result

}

console.log(find(arr));