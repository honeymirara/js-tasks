/* На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
странице в тег li только те строки, которые содержат знак @ */
import React from 'react'

export default function Task3() {
    const arr = ['hel@loo', 'sjdck', 'ak@cc', 'sjhch'];
    return (
        <ul>{arr.filter(el =>  el.includes('@') )}</ul>
    )
}
