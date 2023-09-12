/* Запрос к API с использованием useState и useEffect: Создайте компонент, который
выполняет запрос к API https://api.ipify.org/?format=json и отображает полученные
данные в заголовок с использованием useEffect. */


import { useState, useEffect } from 'react';
import axios from 'axios';


export default function ApiReq() {
    const [ip, setIp] = useState('')

    useEffect(() => {
        sendReq()
    }, [])

    async function sendReq() {
        const response = await axios.get('https://api.ipify.org/?format=json')
        setIp(response.data.ip)

    }
    return (
        <>
            <h1>IP</h1>
            <p>{ip}</p>
        </>)
}