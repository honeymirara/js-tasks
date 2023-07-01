/* Создайте массив объектов, представляющих книги, и найдите книгу где автор
Булгаков (author – одно из полей объекта) */

interface iBook {
    id: number,
    author: string,
    title: string
}

let arr18: iBook[] = [
    { id: 1, author: 'Булгаков', title: 'Мастер и Маргарита' },
    { id: 2, author: 'Маяковский', title: 'Лилечка' },
    { id: 3, author: 'Толстой', title: 'Толстой' }
];

let filtered18 = arr18.filter((object: iBook) => {
    if (object.author == 'Булгаков') {
        return object;
    }
});

console.log(...filtered18);