/* Реализуйте класс WordString, который содержит: конструктор со входной строкой;
метод ReverseString(). Ваша задача перевернуть исходную строку */
class WordString {
    constructor(str) {
        this.str = str;
    }

    doReverse() {
        return this.str.split('').reverse().join('');
    }
}

const wordString = new WordString('Halo');
console.log(wordString.doReverse());