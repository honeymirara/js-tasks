/* По клику на кнопку собрать данные из двух input: name, surname. Работать с 1
state, первоначальное значение которого {name: ‘’, surname: ‘’}. Проверить
значения 2 input на пустоту. Структура state: */

import React, { useState } from 'react';

export default function Task10event() {
    const [form, setForm] = useState({ name: '', surname: '' })

    function changeValue(event) {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    function show() {
        console.log(form);
    }

    return (
        <div>
            <input type="text" onChange={changeValue} name='name' />
            <input type="text" onChange={changeValue} name='surname' />
            <button onClick={show}>button !</button>
        </div>
    )
}
