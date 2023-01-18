//  Напишите функцию, генерирующую надежный пароль. (Math.random)
function generatePwd(x) {
    let arr = [];
    while (arr.length != 8) {
        let random = Math.random() * 10;
        arr.push(Math.floor(random));
    }
    return arr;

}

let pwd = generatePwd();
console.log(pwd.join(''));