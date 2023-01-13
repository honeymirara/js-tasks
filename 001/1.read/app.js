// Вывести в консоль массив объектов

const db = [
    { id: "javascript", label: JavaScript, category: "programmingLanguages", priority: 1 },
    { id: "typescript", label: TypeScript, category: "programmingLanguages", priority: 1 },
    { id: "sql", label: "SQL", category: "programmingLanguages", priority: 2 },
    { id: "java", label: "Java", category: "programmingLanguages", priority: 3 },
    { id: "go", label: "GO", category: "programmingLanguages", priority: 3 }
]

const client = { label: "Test", category: "test", priority: 1 }
const foundData = arr.filter(el => el.label === client.label)

if (foundData.length ===0){
    arr.push(client);
    console.log(arr);
} else {
    console.log('error');
}