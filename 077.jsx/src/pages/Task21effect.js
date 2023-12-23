/* Счетчик с использованием useState и useEffect: Создайте компонент счетчика,
который увеличивает значение счетчика на 1 каждую секунду с использованием
useEffect. */

import { useState, useEffect } from 'react';

export default function Counter() {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(value + 1)
        }, 1000)
        return () => clearInterval(interval)
    })
    return (
        <>
            <p>{value}</p>
        </>
    )
}
