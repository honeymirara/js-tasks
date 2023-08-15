/*2. По клику на кнопку собрать данные из input и проверить вводимую строку на
палиндром */

import { useState } from 'react';

export default function Task6Event() {
    const [input, setInput] = useState('');

    function inputValue(event) {
        setInput(event.target.value)
    }

    function show() {
        if (input === input.split('').reverse().join('')) {
            alert('it is palindrom')
        } else {
            alert('it is not a palindrom');
        }
}
    return (
        <>
            <input type="text" onChange={inputValue} />
            <button onClick={show}></button>
        </>
    )
}
