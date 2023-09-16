/* Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на кнопку
счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
оптимизировать обработчик клика на кнопке. */

import { useState, useCallback } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0)
    const plusCallback = useCallback(plusNum, [value])
    const minusCallback = useCallback(minusNum, [value])

    function plusNum() {
        setValue(value + 1)
    }

    function minusNum() {
        setValue(value - 1)
    }

    return (
        <>
            <h1>{value}</h1>
            <button onClick={plusCallback}>PLUS 1</button>
            <button onClick={minusCallback}>MINUS 1</button>
        </>
    )
}
