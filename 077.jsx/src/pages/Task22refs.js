/* Создайте компонент, который при фокусе на текстовом поле добавляет
background (событие onFocus) */


import { useRef } from 'react';

export default function BackgroundTask() {
    const input = useRef(null);
    const focusOn = () => {
        input.current.style.backgroundColor = 'red';
    }

    const focusOff = () => {
        input.current.style.backgroundColor = 'blue';
    }


    return (
        <>
            <input ref={input} type="text" onFocus={focusOn} onBlur={focusOff} />
        </>
    )
}