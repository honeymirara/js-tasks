/* Создайте динамический массив строк. Используя Some выведите true в случае
если хотя бы 1 элемент массива имеет длину > 5 символов. */
let arr4 = [];
let n4 = +prompt('entire sixe of your array');
for (let i = 0; i < n4; i++) {
    arr4.push(prompt('entire string'));
}
;
let result4 = arr4.some(el => el.length > 5 ? true : false);
console.log(result4);
