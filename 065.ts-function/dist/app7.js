/* У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести тот товар, где количество * прайс является наибольшим значением */
let array7 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function maxPrice7(array) {
    let multiplyPrice7 = array.reduce((sum, elem) => elem.count * elem.price + sum, 0);
    let maxPriceWhithCount = Math.max(multiplyPrice7);
    return maxPriceWhithCount;
}
console.log(maxPrice7(array7));
