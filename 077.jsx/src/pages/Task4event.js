/* У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
рандомно */


export default function Task4event() {
    const arr = ['red', 'black', 'blue'];
    function changeColor(event) {
        event.target.style.backgroundColor = arr[Math.floor(Math.random() * 3)];
    }
    return (
        <div>
            <button onClick={changeColor}> change color</button>
        </div>
    )
}
