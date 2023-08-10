/* По нажатию на enter в input onKeyDown выявлять является ли введенное слово
палиндромом  */


export default function Task3event() {
    function keyDown(event){
        if(event.key !== 'Enter') return;

        if(event.target.value.split('').reverse().join('') === event.target.value
        ){
            alert('it is a palindrom');
        }else{
            alert('it is not a palindrom');
         
        }
    } 
  return (
    
    <div>
        <p></p>
        <input onKeyDown={keyDown}></input>;
        <p></p>
    </div>
  )
}
