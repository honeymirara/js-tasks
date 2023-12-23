/* На входе статичный массив чисел и букв. Ваша задача отобразить на странице в
случае числа четность и нечетность текущего значения в параграфе, в случае
строки отобразить саму строку в параграфе */

import React from 'react'

export default function Task5() {
    const arr = ['s', 2, 'd', 5, 'o'];
    const result = arr.map(el => {
        if (isNaN(el)) {
            return <p>{el}</p>
        } else {
            if (el % 2 === 0) {
                return <p>{'чет'}</p>
            } else {
                return <p>{'не чет'}</p>
            }
        }


    })
    return (
        <div>{result}</div>
    )
}
