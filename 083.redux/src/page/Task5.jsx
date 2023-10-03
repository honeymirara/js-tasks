/* Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
скрывается. */

import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux';
import {show, hide} from '../slice/showHide';

export default function Task5() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.showHide)

    function callShow(){
        dispatch(show())
    }

    function callHide(){
        dispatch(hide())
    }

    return (
        <>
        <p>{data.result}</p>
           
            <button onClick={callShow}>Show text</button>
            <button onClick={callHide}>Hide text</button>
        </>

    )
}

