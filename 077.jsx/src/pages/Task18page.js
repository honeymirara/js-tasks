import { useState } from 'react';

export default function TextTask() {
    const [px, setPx] = useState(10);

    function makeBigger() {
        setPx(px + 1);
    }

    function makeSmaller() {
        setPx(px - 1);
    }

    return (
        <>
            <h1 style={{ fontSize: px }}>TEXT</h1>
            <button onClick={makeBigger}>bigger</button>
            <button onClick={makeSmaller}>smaller</button>
        </>
    )
}