/*  1. При вводе данных в input отображать вводимое значение в параграф текущей
страницы */

import { useState } from 'react'

export default function Task5event() {
    const [input, setInp] = useState('')
    function inputValue(event) {
setInp(event.target.value)

    }
    return (
        <>
        <p>{input}</p>
            <input type="text" onChange={inputValue} /></>
    )
}

