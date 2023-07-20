import { isPalindrome, calculateFactorial, capitalizeString, flattenArray, deleteDublicate } from './app'


describe('test 1', () => {
    test('success', () => {
        const result = isPalindrome('notpalindrome');
        expect(result).toBe(false);
    })
    test('success', () => {
        const result = isPalindrome('yyy');
        expect(result).toBe(true);
    })
    test('success', () => {
        const result = isPalindrome(123);
        expect(result).toBe('it is not a string')
    })
})

describe('test 2', () => {
    test('success', () => {
        const result = calculateFactorial('factorial');
        expect(result).toBe('not a number');

    })
    test('success', () => {
        const result = calculateFactorial(5);
        expect(result).toBe(120);
    })
})

describe('test 3', () => {
    test('success', () => {
        const result = capitalizeString(123);
        expect(result).toBe('not a string')
    });

    test('success', () => {
        const result = capitalizeString('я рисую');
        expect(result).toBe('Я Рисую')
    })
})

describe('testik 4', () => {
    let array = [1, 2, 3, 4, [5, 6]]
    test('success', () => {
        const result = flattenArray(array);
        expect(result).toEqual([1, 2, 3, 4, 5, 6])
    });
    test('success', () => {
        const result = flattenArray('yyyy');
        expect(result).toBe('it is not array');
    });
    test('success', () => {
        const result = flattenArray([]);
        expect(result).toBe('array is empty');

    });
    test('success', () => {
        const result = flattenArray([1, 2, 3, 4, 5]);
        expect(result).toEqual([1, 2, 3, 4, 5])
    })
})

describe('test 6', () => {
    let input = 'AAAABBBCCDAABBB';
    test('success', () => {
        const result = deleteDublicate(input);
        expect(result).toEqual(['A', 'B', 'C', 'D', 'A', 'B']);

    })
})