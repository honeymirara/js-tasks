/* На входе статичный массив чисел. Ваша задача найти корень каждого числа и
отобразить на странице в виде h1 */

import React from 'react'

export default function Task2() {
    const arr = [1, 2, 3, 4, 5];
    
  return (
    <div>{arr.map(el => <h1>{Math.floor(Math.sqrt(el))}</h1>)}</div>
  )
}
