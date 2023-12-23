/* Создайте компонент, который при каждом клике на кнопку увеличивает размер
шрифта текста в элементе на странице */

import { useRef } from 'react'

export default function Task20ref() {

    const data = useRef();

    function makeBigger() {
        data.current.style.fontSize = parseInt(data.current.style.fontSize) + 1 + `px`
    }

    function makeSmaller() {
        data.current.style.fontSize = parseInt(data.current.style.fontSize) - 1 + `px`
    }

    return (
        <>

            <div style={{ fontSize: '10px' }} ref={data}> task </div>
            <button onClick={makeBigger}>+1</button>
            <button onClick={makeSmaller}>-1</button>

        </>
    )
}
