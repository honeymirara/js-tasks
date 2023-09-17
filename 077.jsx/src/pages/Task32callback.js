/* Создайте компонент, который отображает список элементов с кнопками
"Удалить". При нажатии на кнопку элемент должен быть удален из списка.
Используйте useCallback, чтобы оптимизировать функцию удаления элемента. */

import { useState, useCallback } from 'react';

export default function Task32callback() {
    const [arr, setArr] = useState(['a', 'b', 'c', 'd', '1', '2', '3'])
    const deleteCallback = useCallback(deleteElement, [arr])


    function deleteElement(e) {
        const filtered = arr.filter((el) => {
            return el !== e.target.id;
        })
        setArr(filtered)
    }

    return (
        <>
            {arr.map((el, index) => {
                return (
                    <div key={index}>
                        {el}
                        <button onClick={deleteCallback} id={el}>Delete</button>
                    </div>
                )
            })}
        </>
    )
}
