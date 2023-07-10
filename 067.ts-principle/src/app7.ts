/* Создайте класс StringManipulator, который будет иметь методы reverseString,
isPalindrome, countVowels. Реализуйте функционал для разворота строки,
проверки, является ли строка палиндромом, и подсчета гласных букв в строке.
Использовать Generics */



class StringManipulator<Type extends string> {
    private str: Type

    constructor(str:Type) {
        this.str = str
    }


    reverseString():Type {
        return this.str.split('').reverse().join('') as Type;
    }

    isPalindrome():boolean {
        const reversed = this.reverseString();
        return this.str === reversed;
    }

    countVowels():number {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;

        for (const char of this.str.toLowerCase()) {
            if (vowels.includes(char)) {
                count++
            }
        }
        return count;
    }
}

let stringManipulator = new StringManipulator('hello');
console.log(stringManipulator.reverseString());
console.log(stringManipulator.isPalindrome());
console.log(stringManipulator.countVowels());