/* Создайте компонент текстового поля, который позволяет пользователю вводить
текст и отображает его в реальном времени. */

import { fillInput } from '../slice/inputValue';
import { useDispatch, useSelector } from 'react-redux';



export default function Values() {
    const state = useSelector(state => state.inputValue)
    const dispatch = useDispatch()


    function show(event) {
        const data = fillInput(event.target.value)
        dispatch(data)
    }

    return (
        <>
            <h1>{state}</h1>
            <input type="text" onChange={show} />
        </>
    )
}