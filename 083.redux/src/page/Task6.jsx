/* Создайте компонент, который отображает проверку почты (true, false) на
валидность регулярному выражению. Валидатор состоит из Input для ввода почты
и кнопки для запуска валидатора. */
import { useDispatch, useSelector } from 'react-redux';
import {fillInp, isValidEmail} from '../slice/validEmail';

export default function Task6(){
    const dispatch = useDispatch();
    const {input, result} = useSelector(state => state.validEmail)
    
    return (
        <>
        <h1>{String(result)}</h1>
        <input onChange={(event)=> dispatch(fillInp(event.target.value))} type="text" />
        <button onClick={()=> dispatch(isValidEmail())}>click</button>
        </>
    )
}