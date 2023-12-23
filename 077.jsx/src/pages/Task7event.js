/* 3. По клику на кнопку собрать данные из input и проверить вводимую строку на
почту */

import React, { useState } from 'react';

export default function Task7event() {
    const [input, setInput] = useState('');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    function inputValue(event) {
        setInput(event.target.value);
    }

    function show() {
        if (emailPattern.test(input)) {
            alert('Email is valid');
        } else {
            alert('Email is invalid');
        }
    }

    return (
        <>
            <input type="text" onChange={inputValue} />
            <button onClick={show}>Проверить</button>
        </>
    );
}
