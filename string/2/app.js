// На вход подается строка из 2 и более слов. Необходимо добавить тире между
// словами 
const str = "Happy New Year".trim();
if (isNaN(str)) {
    console.log(str.replaceAll(" ", "-"));
}