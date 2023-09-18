/* Создайте компонент счетчика, который может увеличивать или уменьшать
значение при нажатии на соответствующие кнопки. */

import { useReducer } from 'react';

function reducer(count, action) {
    switch (action) {
        case 'plusNum':
            return count + 1
        case 'minusNum':
            return count - 1
        default: break;
    }

}

export default function Task34reducer() {
    const [count, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => dispatch('plusNum')}>+1</button>
            <button onClick={() => dispatch('minusNum')}>-1</button>
        </>
    )
}