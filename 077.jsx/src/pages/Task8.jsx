import { UseState } from 'react';

export default function HookUseState() {
    const [value, setValue] = useState('')
    function collectData() {
        console.log(value);
    }

    function changeValue(event) {
        setValue(event.target.value)
    }

    return (
        <>
            <div>
                <input type="text"  onChange={changeValue} />

            </div>
            <button onClick={collectData}>Data</button>
        </>
    )

}