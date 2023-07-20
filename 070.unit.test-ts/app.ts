/* Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
и возвращает true, если оно является палиндромом (читается одинаково слева
направо и справа налево), и false в противном случае.
*/
function isPalindrome(word: any): boolean {
    try {
        if (typeof word !== 'string') throw new Error('it is not a string');
        const reverseWord = word.split('').reverse().join('');
        if (reverseWord !== word) return false

        return true;
    } catch (err) {
        return err.message;
    }
}






/* Напишите функцию calculateFactorial(n: number): number, которая принимает
число n и возвращает его факториал. */

function calculateFactorial(n: any): number | string {
    try {
        if (typeof n !== 'number') throw new Error('not a number');
        if (n < 0) throw new Error('cant find factorial of number<0');
        let result: number = 1;
        for (let i: number = 1; i <= n; i++) {
            const elem = i;
            result *= elem;
        }
        return result
    } catch (err) {
        return err.message
    }
}

/* Напишите функцию capitalizeString(str: string): string, которая принимает строку и
возвращает новую строку, в которой каждое слово начинается с заглавной буквы. */

function capitalizeString(str: any): string {
    try {
        if (typeof str !== 'string') throw new Error('not a string');
        let temp: string[] = str.split(' ');
        let result = '';
        for (let i = 0; i < temp.length; i++) {
            const elem = temp[i];
            result += elem[0].toUpperCase() + elem.slice(1) + ' '
        }
        return result.trim();


    } catch (err) {
        return err.message
    }
}

/* . Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
котором могут быть вложенные массивы, и возвращает новый массив, в котором
все элементы являются плоским списком без вложенности. */

//flat?

function flattenArray(array: any): any[] {
    try {
        if (!Array.isArray(array)) throw new Error('it is not array');
        if (array.length == 0) throw new Error('array is empty');
        let newArray = array.flat(Infinity);
        return newArray;

    } catch (err) {
        return err.message;
    }
}

/* Реализуйте функцию, которая принимает в качестве параметра строку и
возвращает массив без каких-либо элементов с одинаковым значением рядом
друг с другом.
Написать тест для функции
'AAAABBBCCDAABBB -> ['A', 'B', 'C', 'D', 'A', 'B’]
'ABBCcAD’ -> ['A', 'B', 'C', 'c', 'A', 'D’]
'12233’ -> [1, 2, 3]
Написать тест для функции
 */


function deleteDublicate(input: string): string[] {
    let result: string[] = [];

    for (let i = 0; i < input.length; i++) {
        if (i === 0 || input[i] !== input[i - 1]) {
          result.push(input[i]);
        }
      }
    
      return result;
    }
    /* for (let i = 0; i < string.length; i++) {
        let elem = string[i];
        if (elem !== string[i + 1] && elem == string[i - 1]);
        if (result[result.length - 1] == elem) {
            continue;
        } else {
            result += elem;
        }

    }else{
        result 
    }
} */

export { isPalindrome, calculateFactorial, capitalizeString, flattenArray, deleteDublicate }