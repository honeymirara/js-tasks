/* Реализуйте функцию, которая принимает массив последовательных
(возрастающих) букв и возвращает отсутствующую в массиве. Добавить проверки
["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P" */

const al = 'abcdefghijklmnopqrstuvwxyz';
const pr = ["a", "b", "c", "d", "f"].join('').toLowerCase;

const firstIndex = al.indexOf(pr[0])

const slEl = al.slice(firstIndex, firstIndex + pr.length + 1);

for (let i = 0; i < slEl.length; i++) {
    if (slEl[i] !== pr[i]) {
        console.log(slEl[i]);
    }
}

console.log(pr);
console.log(slEl);