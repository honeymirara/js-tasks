/* Создайте компонент, который имеет кнопку "Изменить статус". При каждом клике
на кнопку статус компонента должен меняться между "Активный" и "Неактивный".
Используйте useCallback, чтобы оптимизировать функцию изменения статуса. */

import { useState, useCallback} from 'react'

export default function Task33callback() {
    const [value, setValue] = useState('active')
    const [flag, setFlag] = useState(true)

    const status = useCallback(()=>{
        if (flag === false) {
            setValue('not active')
            setFlag(true)
        } else {
            setValue('active')
            setFlag(false)
        }
    }, [flag])

    return (
        <>
            <h1>{value}</h1>
            <button onClick={status}> change status</button>
        </>
    )
}