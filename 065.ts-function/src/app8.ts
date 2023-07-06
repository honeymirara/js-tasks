/* У вас есть массив строковых значений почт. Необходимо вывести значения
массива без дубликатов. Добавить проверки на тип данных, почту */

interface iMails8 {
    id: number;
    mail: string;
}

let array8 = [
    { id: 1, mail: 'lala@gmail.com' },
    { id: 2, mail: 'masha@gmail.biz' },
    { id: 3, mail: 'nina@gmail.by' },
    { id: 3, mail: 'nina@gmail.by' }
]

function uniqueObjects8(array: iMails8[]): iMails8[] {
    return array8.reduce((arr, elem) => {
        if (!arr.includes(elem.mail)) {
            arr.push(elem.mail)
        }
        return arr;
    }, [])
}


console.log(uniqueObjects8(array8))