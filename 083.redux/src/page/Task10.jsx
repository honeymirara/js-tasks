/* реализовать счетчик. Изначально счетчик равен 0. по клику на кнопку каждый раз значение счетчика увеличивается на 5 */

import {useDispatch, useSelector} from 'react-redux';
import {sum} from '../slice/counter'

export default function Task10(){
    const dispatch = useDispatch();
    const result = useSelector(state => state.counter)
    
    return(
        <>
        <h1>{result}</h1>
        <button onClick={()=>dispatch(sum())}>+5</button>
        </>
    )
}