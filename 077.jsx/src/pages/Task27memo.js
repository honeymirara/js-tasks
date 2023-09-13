/* Создайте компонент React, который отображает сумму двух чисел. Используй хук
useState для хранения значений чисел и хук useMemo для кэширования
результата суммы. При изменении значений чисел, сумма должна
пересчитываться только тогда, когда необходимо. */
import { useState, useMemo } from 'react';

export default function SumOfTwoNumbners() {

    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [sum, setSum] = useState('')

    function change1(e) {
        setNumber1(+e.target.value)
    }

    function change2(e) {
        setNumber2(+e.target.value)
    }

   useMemo(makeSum, [number1, number2])

    function makeSum() {
        setSum(number1 + number2)
    }


    return (
        <>
            <h1>{sum}</h1>
            <input type="text" onChange={change1} />
            <input type="text" onChange={change2} />
            
        </>
    )
}

