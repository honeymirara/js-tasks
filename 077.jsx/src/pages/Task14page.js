/* . Форма с использованием useState: Создайте компонент текстового поля, который
позволяет пользователю вводить текст и отображает его в реальном времени. */


import {useState} from 'react';

export default function EnterText(){
   const [value, setValue] = useState('');


   function changeInputValue(event){
    setValue(event.target.value)
   }

   
    return(
        <>
        <h1>{value}</h1>
        <input type="text" onChange={changeInputValue}/>
        </>
    )
}