/* . Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
оценил использование комментариев в ветке development и попросил их убрать.
Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
регулярное выражение, которое вырежет все комментарии из html разметки
<!-- --> 

let str = `
<div>
<input type="text">
<!-- <div>eydye</div> -->
<p>test<span>!</span></p>
<!-- p -->
</div>
`
*/

const string = '';

function newCode(string_) {
    try {
        if (string.length == 0){
            throw new Error ('пустая строка')
        }
        let regex = ;
        let final  = string.replaceAll(regex, '');
        return final

    } catch (err) {
        return err.message;

    }
}

let result = newCode(string);
console.log(result);