/* На входе 2 статичные переменные пароля. По клику на кнопку необходимо
реализовать метод валидации. Написать регулярное выражение: пароль от 8
символов, содержит числа, буквы, !@#$%^&*+= */

import React from 'react'
import { Link } from 'react-roter-dom';

export default function Task1event() {
  const pwd1 = 'jhv@y65dn';
  const pwd2 = 'jv*y634sd';
  try {
    if (pwd1.length < 8 || pwd2.length < 8) throw new Error('password is too short');
    if(pwd1 !== pwd2) throw new Error('is inValid')
    alert('+')
  } catch (err) {
    console.log(err.message);
  }

  return (
    <div>
      <button onClick={isValid}>Click</button>
    </div>
  )
}

/* regex /[a-z0-9A-Z]+[!\@#$%^&*+= *]/gm */
