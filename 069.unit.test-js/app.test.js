const { sum, multiply, summary, findProduct, uniqueNumber } = require('./app');

describe('набор тестов 1', () => {
    test('success', () => {
        const result = sum(2, 2);
        expect(result).toBe(4)
    });

})

describe('набор тестов 2', () => {
    test('success', () => {
        const result = multiply(3, 4);
        expect(result).toBe(12)
    });
    test('success', () => {
        const result = multiply(2, 'string');
        expect(result).toBe('it is invalid data');
    });

    describe

});


describe('набор текста 3', () => {
    test('success', () => {
        const result = summary([10, 20, 30]);
        expect(result).toBe(60);
    })
    test('success', () => {
        const result = summary('string');
        expect(result).toBe('it is not array');
    })

})




describe('набор теста 4 ', () => {
    let arr = [{ id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
    { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
    { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
    { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
    { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
    { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ];

    test('success', () => {
        const result = findProduct(arr);
        expect(result).toEqual([{ id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
        { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }]);
        expect(result).toHaveLength(2);
        expect(result.length).toBeGreaterThan(0);
        expect(result.length).toBe(2);     //ожидаемый результат
    })

    test('success', () => {
        const result = findProduct('ttt');
        expect(result).toBe('it is not array');
    })

    test('success', () => {
        const result = findProduct([]);
        expect(result).toBe('array is empty');

    })




    /* test('success', () => {

    }) */
})



describe('набор текста 5', () => {
    let arrNum = ['+375448989',
        '+3752963783', '+384994844', '+384994844'];
    test('success', () => {
        const result = uniqueNumber(arrNum);
        expect(result).toEqual(['+375448989',
            '+3752963783', '+384994844']);
        expect(result).toHaveLength(3);

    })


    test('success', () => {
        const result = uniqueNumber([]);
        expect(result).toBe('Array is empty');

    })

    test('success', () => {
const result = uniqueNumber('888');
expect(result).toBe('it is not array')
    })
});




/* ['+375448989',
'+3752963783', '+384994844', '+384994844'] */

/*[ { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
{ id: 2, title: 'Смартфон', count: 33, price: 1500 , producer: 'Германия' },
{ id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
{ id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
{ id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
{ id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
{ id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
] */