/* Создайте стейт number, setNumber. Первоначальное значение 1. Компонент
возвращает кнопку и параграф, в котором отображается значение состояния
number с помощью jsx. Ваша задача так реализовать функционал, чтобы при клике
на кнопку автоматически прибавлялась +1 к стейту number */

import React, { useState } from 'react';

export default function Task11event() {
    const [number, setNumber] = useState(0);

   

    const onClickPlus = () => {
        setNumber(number + 1)
    }
    const onClickMinus = () => {
        setNumber(number - 1)
    }

    return (
        <>
            <p>{number}</p>
            <button onClick={onClickMinus} className="minus">- Минус</button>
            <button onClick={onClickPlus} className="plus">Плюс +</button>
        </>

    );

}