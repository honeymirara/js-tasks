/* Отображение текста с использованием useState: Создайте компонент, который
предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на "Показать"
отображается текст, а при нажатии на "Скрыть" текст скрывается. */

import {useState} from 'react';

export default function DisplayValue(){
    const [value, setValue] = useState(false)
    
    function show1(event){
    if (value === false){
        setValue(true)
    }else{
        setValue(false);
    }
    }

    function show2(event){
        if (value === true){
            setValue(false)
        }else{
            setValue(true);
        }
        }

    return(
        <>
        <h1>{value === true ? 'hi' : ''}</h1>
        <div onClick={show1}>show</div>
        <div onClick={show2}>hide</div>
        </>
    )
}