// Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
let str10_a: string = 'life';
let str10_b: string = 'file';

for (let i: number = 0; i < str10_a.length; i++) {
    if (str10_a.includes(str10_b[i])) {
        console.log('yes, it is a anogarm')
    } else {
        console.log('no, it is not a anogarm')
    }
}