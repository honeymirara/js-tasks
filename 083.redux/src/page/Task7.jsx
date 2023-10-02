/* Создайте компонент, который отображает сумму значений input. Компонент
состоит из Input для ввода математического значения и кнопки сложения для
высчитывания результата внутри строки */

import {useDispatch, useSelector} from 'react-redux';
import {fillInp1, fillInp2, isSumInput} from '../slice/sumInput';

export default function Task7(){
    const dispatch = useDispatch();
    const {inp1, inp2, result} = useSelector(state => state.sumInput)

    return(
        <>
        <h1>{result}</h1>
        <input onChange={(event)=> dispatch(fillInp1(event.target.value))} type="text" />
        <input onChange ={(event)=> dispatch(fillInp2(event.target.value))} type="text" />
       <button onClick={()=>dispatch(isSumInput())}></button>
        </>
    )
}