/* Форма ввода с использованием useState и useEffect: Создайте компонент React,
который содержит форму с полем ввода. Используйте хук useState для хранения
значения введенного текста и хук useEffect для отслеживания изменений этого
значения. При каждом изменении значения в поле ввода, выводить его в консоль
с помощью useEffect.
 */


import { useState, useEffect } from 'react'

export default function Show() {
    const [value, setValue] = useState('')

    function changeInp(e) {
        setValue(e.target.value)
    }

    useEffect(() => {
        console.log(value)
    }, [value])

    return (
        <>
            <input type="text" onChange={changeInp} />
        </>)
}

