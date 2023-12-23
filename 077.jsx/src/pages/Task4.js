/* . На входе статичный массив строк. Ваша задача отобразить на странице все строки
массива, а также картинку. Каждая итерация будет возвращать
<div>
<p>el</p>
<img/>
</div> */

import React from 'react'
import img from './assets/image.png'

export default function Task4() {
    const arr = ['fcgc', 'jhvv']
    return (
        <div>{arr.map((el) =>(
            <div>
                <p> {el}</p>
                <img src={img} alt = "nothing"></img>
            </div>))}
        </div>
    )
}
