/* Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
скрывается. */

import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';

export default function Task5() {
    const dispatch = useDispatch();
    const {input, result} = useSelector(state => st)

    return (
        <>
            <div>Hello</div>
            <button></button>
            <button></button>
        </>

    )
}

