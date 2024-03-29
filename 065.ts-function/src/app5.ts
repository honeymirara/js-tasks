/* У вас есть массив объектов вида приведенного в приложении. Необходимо
вывести товар с максимальным прайсом */

interface iThings5 {
    id: number;
    title: string;
    count: number;
    price: number;
}


let array5: Array<iThings5> = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

function maxPrice(array: iThings5[]): iThings5[] {
    let arrayOfPrices: number[] = array.map((el: iThings5) => el.price);
    let max: number = Math.max(...arrayOfPrices);
    console.log(arrayOfPrices);
    return array.filter((el: iThings5) => el.price == max);

}

console.log(...maxPrice(array5));