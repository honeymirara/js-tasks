// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
// https://www.instagram.com/hschool.official/ -> www.instagram.com/hschool.official/

const url = "https://www.instagram.com/hschool.official";

if (url.startsWith("http") || url.startWidth('https')) {
    console.log(url.slice(url.indexOf('//') + 2));
} else {
    console.log('Error');
}