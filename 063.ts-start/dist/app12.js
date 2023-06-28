// Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *
let str12 = 'butterfly'.split('');
let result12 = '';
while (str12.includes('a' || 'e' || 'i' || 'o' || 'u' || 'y')) {
    console.log(str12.filter(char => char !== 'a' || 'e' || 'i' || 'o' || 'u' || 'y').join('*'));
}
