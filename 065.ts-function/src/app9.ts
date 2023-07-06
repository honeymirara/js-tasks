/* Напишите код, который сделает из массива объект
[ {name: 'width', value: 10}, {name: 'height', value: 20} ] -> {width: 10, height: 20} */

let object8 = [{ name: 'width', value: 10 }, { name: 'height', value: 20 }]

function objectRev9(object8) {
    let obj8 = {}
    let result8 = object8.forEach(elem => {
        object8[elem.name] = elem.value
    })
    return obj8
}

let result = objectRev9(object8);
console.log(result);

