/* Создайте компонент формы. По клику на кнопку собрать данные из input и
проверить вводимую строку на палиндром */
import {useDispatch, useSelector} from 'react-redux';
import {fillInput, check}  from '../slice/inputPalindrome';

function Task4(){
    const dispatch = useDispatch()
    const {input, result} = useSelector(state => state.inputPalindrome)

    function callFill(e){
        dispatch(fillInput(e.target.value))
    }
    return(
        <>
        <h1>{input}</h1>
        <h1>{String(result)}</h1>
        <input onChange = {callFill} type="text" />
        <button onClick={()=> dispatch(check())}>Check palindrome</button>
        </>
    )
}

export default Task4;