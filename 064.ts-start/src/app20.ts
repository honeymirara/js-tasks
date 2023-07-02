/* Создайте массив объектов, представляющих книги, и найдите книгу с самым
большим количеством страниц (count – одно из полей объекта) */

interface Books {
    id: number,
    author: string,
    title: string,
    count: number
}

let arr20: Books[] = [
    { id: 1, author: 'Булгаков', title: 'Мастер и Маргарита', count: 700 },
    { id: 2, author: 'Маяковский', title: 'Лилечка', count: 450 },
    { id: 3, author: 'Толстой', title: 'Толстой', count: 1000 }
];

let maxPage20 = Math.max(...arr20.map(book => book.count));
let findBook20 = arr20.find(book => book.count === maxPage20);


console.log(findBook20, maxPage20);

/* 
const maxPageCount = Math.max(...books.map(book => book.pageCount));
const bookWithMaxPages = books.find(book => book.pageCount === maxPageCount); */
