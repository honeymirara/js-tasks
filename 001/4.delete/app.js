// Delete
// Удаление объекта из массива по id
// Примечание: для удаления объекта в БД можно отфильтровать объект БД не
// включая id клиента
// Если совпадения по id нет – ошибка 

const arr = [
    { id: "javascript", label: JavaScript, category: "programmingLanguages", priority: 1 },
    { id: "typescript", label: TypeScript, category: "programmingLanguages", priority: 1 },
    { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
    { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
    { id: "go", label: "GO", category: "programmingLanguages", priority: 3 }
]

const client = { label: "Test", category: "test", priority: 1 }

const filter = arr.filter(el => el.label !== client.label); //  [(4)]
/* 
 { id: "typescript", label: TypeScript, category: "programmingLanguages", priority: 1 },
    { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
    { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
    { id: "go", label: "GO", category: "programmingLanguages", priority: 3 }

 */
if (arr.length !== filter_.length) {
    filter_.push(client);
    console.log(filter_);
}else 
console.log('not found 404');




