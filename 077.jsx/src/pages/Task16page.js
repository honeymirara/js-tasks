/* Изменение цвета с использованием useState: Создайте компонент выбора цвета,
который позволяет пользователю выбирать цвет из списка и отображает цвет
выбранного цвета на экране. */

import { useState } from 'react';

export default function Colors() {
    const [value, setValue] = useState(null);

    function changeColor(event) {
        setValue(event.target.textContent)
    }
    return (
        <>
            <h1 style={{ color: value }}>{value}</h1>
            <button onClick={changeColor}>red</button>
            <button onClick={changeColor}>purple</button>
            <button onClick={changeColor}>green</button>
        </>

    )
}