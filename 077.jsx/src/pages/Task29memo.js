import { useState, useMemo } from "react";

export default function Factorial() {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    function changeInp(event) {
        setValue(+event.target.value)
    }
    useMemo(doFactorial, [value])

    function doFactorial() {
        let num = 1;
        for (let i = 1; i <= value; i++) {
            num *= i
        }
        setResult(num)
    }
    return (
        <>
            <h1>{result}</h1>
            <input type="text" onChange={changeInp} />
           
        </>
    )
}