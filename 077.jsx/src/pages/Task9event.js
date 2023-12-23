
/* 4. По клику на кнопку собрать данные из двух input (2 разных state). Сравнить
значения 2 input */

import React, { useState } from 'react';

export default function Task9event() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    function handleInput1Change(event) {
        setInput1(event.target.value);
    }

    function handleInput2Change(event) {
        setInput2(event.target.value);
    }

    function compareInputs() {
        if (input1 === input2) {
            alert('values is match');
        } else {
            alert('values is different');
        }
    }

    return (
        <>
            <input type="text" value={input1} onChange={handleInput1Change} />
            <input type="text" value={input2} onChange={handleInput2Change} />
            <button onClick={compareInputs}>Сравнить</button>
        </>
    );
}
