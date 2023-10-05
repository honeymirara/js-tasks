/* 8. Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
ввести пароль, который соответствует определенным требованиям (например,
содержание букв, цифр и специальных символов).
 */

import {useDispatch, useSelector} from 'react-redux';
import {fillInp, isValidPass} from '../slice/validPass';

export default function Task8(){
    const dispatch = useDispatch();
    const {input, result} = useSelector(state=>state.validPass)
return(
    <>
    <h1>{String(result)}</h1>
    <input onChange={(event)=> dispatch(fillInp(event.target.value))} type="text" />
    <button onClick={()=> dispatch(isValidPass())}>CLICK</button>
        </>
)

}