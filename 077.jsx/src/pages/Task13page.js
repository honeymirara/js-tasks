/* . Счетчик с использованием useState: Создай компонент React, который отображает
числовое значение и кнопки "+1" и "-1". Используйте хук useState для управления
состоянием счетчика. При нажатии на кнопки, значение счетчика должно
увеличиваться или уменьшаться. */
import { useState } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0)

    function counterIncrement() {
        setValue(value + 1);
    }

    function counterDecrement() {
        setValue(value - 1);
    }

    return (
        <>
            <h1>{value}</h1>
            <button onClick={counterIncrement}>+1</button>
            <button onClick={counterDecrement}>-1</button>

        </>
    )
}