/* Напишите функцию, которая принимает почту и возвращает объект, вида
{
email,
active: true / false
}
true, если почта содержит @, .com / .ru. False в противном случае */

const str = 'google@gmail.com';

function getEmail(str) {
    if (str.includes('@') && (str.includes('.com') || str.includes('.ru'))) {
        return {
            email: str,
            active: true
        }

    } else {
        return {
            email: str,
            active: false
        }
    }

}


console.log(getEmail(str));

