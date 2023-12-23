/* Создайте компонент с лампочкой и кнопкой, которая позволяет включать и
выключать лампочку. Под лампочкой предполагается кнопка button с
соответствующим текстом */

import { useReducer } from 'react';

function reducer(state, action) {
    switch (action) {
        case 'LampOn':
            return state = 'On'
        case 'LampOff':
            return state = 'Off'
        default: break;
    }
}

export default function Task35reducer() {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h1>{state}</h1>
            <button onClick={() => dispatch('LampOn')}>ON</button>
            <button onClick={() => dispatch('LampOff')}>OFF</button>
        </>
    )
}