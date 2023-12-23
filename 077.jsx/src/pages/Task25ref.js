/* Реализуйте компонент, который отслеживает количество кликов на кнопку с
помощью useRef и выводит это число при каждом клике. */
import { useRef } from 'react';

export default function ShowColorByButton() {
    const data = useRef();


    function showNumber() {
        data.current.textContent = +data.current.textContent + 1
    }


    return (
        <>
            <h1 ref={data}>0</h1>
            <button onClick={showNumber}>CLICK HERE</button>
        </>
    )
}
