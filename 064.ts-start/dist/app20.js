/* Создайте массив объектов, представляющих книги, и найдите книгу с самым
большим количеством страниц (count – одно из полей объекта) */
let arr20 = [
    { id: 1, author: 'Булгаков', title: 'Мастер и Маргарита', count: 700 },
    { id: 2, author: 'Маяковский', title: 'Лилечка', count: 450 },
    { id: 3, author: 'Толстой', title: 'Толстой', count: 1000 }
];
let maxPage20 = Math.max(...arr20.map(books => books.count));
let findBook20 = arr20.find(books => books.count === maxPage20);
console.log(findBook20, maxPage20);
/*
const maxPageCount = Math.max(...books.map(book => book.pageCount));
const bookWithMaxPages = books.find(book => book.pageCount === maxPageCount); */
