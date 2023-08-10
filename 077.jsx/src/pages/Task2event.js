/* По событию изменения input отображать в консоль каждое вводимое значение */


export default function Task2event() {
    function showCurruntSymbol(event) {
        console.log(event.target.value);
    }

    return (
        <div>
            <div><input type="text" onChange={showCurruntSymbol}></input></div>
        </div>
    )
}
