/* У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести средний прайс среди всех продуктов */
let array6 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function middlePrice6(array) {
    let sum6 = array.reduce((sum, elem) => sum + elem.price, 0);
    return sum6 / array6.length;
}
console.log(middlePrice6(array6));
