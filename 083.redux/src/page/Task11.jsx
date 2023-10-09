//отобразить значение из инп в h1

import { useDispatch, useSelector } from 'react-redux';
import { fillInp } from '../slice/showInpValue';

export default function Task11() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.showInpValue)

    return (
        <>
            <h1>{result}</h1>
            <input type="text" onChange={(event) => dispatch(fillInp(event.target.value))} />
        </>
    )
}