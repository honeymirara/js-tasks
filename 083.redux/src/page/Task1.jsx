import { countPlus } from '../slice/increment'
import { useDispatch, useSelector } from 'react-redux';


export default function Task1() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.increment)
    return (
        <>
        <p>{state}</p>
            <button onClick={() => dispatch(countPlus())}>+1</button>
        </>
    )
}
