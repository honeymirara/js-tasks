/* Создайте класс StringManipulator, который будет иметь методы reverseString,
isPalindrome, countVowels. Реализуйте функционал для разворота строки,
проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
Использовать Generics */
class StringManipulator {
    str;
    constructor(str) {
        this.str = str;
    }
    reverseString() {
        return this.str.split('').reverse().join('');
    }
    isPalindrome() {
        const reversed = this.reverseString();
        return this.str === reversed;
    }
    countVowels() {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        for (const char of this.str.toLowerCase()) {
            if (vowels.includes(char)) {
                count++;
            }
        }
        return count;
    }
}
let stringManipulator = new StringManipulator('hello');
console.log(stringManipulator.reverseString());
console.log(stringManipulator.isPalindrome());
console.log(stringManipulator.countVowels());
