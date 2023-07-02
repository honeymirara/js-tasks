/* Создайте массив объектов, представляющих книги, и отобразите книги где цена
каждой > 50 (price – одно из полей объекта) */

interface Book {
    id: number,
    author: string,
    title: string,
    price: number
}

let arr19: Book[] = [
    { id: 1, author: 'Булгаков', title: 'Мастер и Маргарита', price: 60 },
    { id: 2, author: 'Маяковский', title: 'Лилечка', price: 20},
    { id: 3, author: 'Толстой', title: 'Толстой', price: 40 }
];

let filtered19 = arr19.filter((object: Book) => {
    if (object.price > 50) {
        return object;
    }
});

console.log(...filtered19);

