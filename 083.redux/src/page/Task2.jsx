/* Создайте компонент, который будет отображать числовое значение и кнопки "+1"
и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика. */

import { countPlus, countMinus } from '../slice/decrement'
import { useDispatch, useSelector } from 'react-redux';


export default function Task1() {
    const dispatch = useDispatch();
    const state1 = useSelector((state) => state.decrement)
    return (
        <>
        <p>{state1}</p>
            <button onClick={() => dispatch(countPlus())}>+1</button>
            <button onClick={() => dispatch(countMinus())}>-1</button>
        </>
    )
}
