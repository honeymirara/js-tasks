/* Создайте простое приложение для аутентификации пользователя. Используйте
useContext, чтобы хранить информацию о текущем пользователе.
 */

import { useContext } from 'react';
import MyContext from '../context/context';

export default function ContextAuth() {
    const auth = useContext(MyContext)
    return (
        <>
            <h1>{auth.name}</h1>
            <p>{auth.surname}</p>
        </>
    )
}