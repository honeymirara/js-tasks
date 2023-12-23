/* Разработайте приложение, в котором пользователь может выбирать язык
интерфейса (например, английский и испанский). Используйте useContext, чтобы
хранить текущий выбранный язык и переводить текст на выбранный язык в
компонентах. */

import { useContext} from 'react';
import MyContext from '../context/context';

export default function Language() {
    const data = useContext(MyContext)
    

    const translate = {
        by: 'вiтанкi',
        en: 'hi'
    }
    
    return (
        <>
            <button onClick={data.sayHello}>en</button>
            <button onClick={data.sayHello}>by</button>
            <p>{translate[data.value]}</p>
        </>
    )
}