/* Реализуйте компонент, который отслеживает количество кликов на кнопку с
помощью useRef и выводит это число при каждом клике. */

import { useRef } from 'react';


export default function ChangeColor() {
    const data = useRef()

    const arrColors = ['green', 'pink', 'cyan'];

    function change() {
        data.current.style.color = arrColors[Math.floor(Math.random() * 3)]
    }
    return (
        <>
            <p ref={data}>TEXT</p>
            <button onClick={change}> BUTTON</button>
        </>
    )
}