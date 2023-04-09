/* . Вы вводите строку. Неоходимо проверить является ли эта строка датой и
соответствует шаблону вида хх-хх-хххх */
const inputTag = document.querySelector(".inp");
const buttonTag = document.querySelector("button");

buttonTag.addEventListener("click", ()=>{
    try{
        if(!/^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/gm.test(inp.value)){
            alert("valid")
throw new Error('not valid')}
    }catch(err){
        alert(err.message);
    }
})