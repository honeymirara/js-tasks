/* Создайте массив строк и выведите на экран все элементы, которые содержат
букву 'a'. */

let str2: string[] = ['la hehe no', 'ok yee', 'oops queuq'];


for (let i: number = 0; i < str2.length; i++) {
    if (str2[i].includes('a')) {
        console.log(str2[i]);
    }
}

