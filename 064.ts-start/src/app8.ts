/* Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром. */
let arr8: string[] = ['ama', 'lol', 'sas'];

for (let i: number = 0; i < arr8.length; i++) {
    let filtered8 = arr8.filter(function (el) {
        if (el == el.split('').reverse().join())
            console.log(filtered8);
    })
}

