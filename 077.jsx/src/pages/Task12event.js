/* 7.Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
возвращает 2 кнопки и параграф, в котором отображается значение состояния
number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
на кнопку +1 автоматически прибавлялась +1 к стейту numberю При клике на -1
вычиталось 1 числовое значение */

import React, { useState } from 'react';

export default function Task12event() {
    const [number, setNumber] = useState(1);

    
    const onClickPlus = () => {
        setNumber(number + 1)
    }

    const onClickMinus = () => {
     setNumber(number - 1)
    }

    return (
        <>
        <p>{number}</p>
        <button onClick = {onClickMinus} className='minus'>Minus -</button>
        <button onClick = {onClickPlus} className='plus'>Plus +</button>
        </>
    )
}