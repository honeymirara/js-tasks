/* Создайте массив строк и преобразуйте каждую строку в новую строку,
содержащую только гласные буквы. */

let arr10: string[] = ['ama', 'lol', 'sas'];


let filtered10 = arr10.filter(function (el) {
    if (el.split(' ').includes('a' || 'e' || 'i' || 'o' || 'u' || 'y'))
        console.log(arr10.filter(char => char !== 'a' || 'e' || 'i' || 'o' || 'u' || 'y').join(' '));
    });


