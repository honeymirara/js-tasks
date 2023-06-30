/* Создайте массив строк и объедините все элементы в одну строку без пробелов. */
let str6 = ['nonono', 'misterfish', 'itsagoodplace'];
for (let i = 0; i < str6.length; i++) {
    let result6 = str6.join('').trim();
    console.log(result6);
}
