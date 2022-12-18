//  На вход подается строка из нескольких строк. Необходимо преобразовать слово в
// хештег. Добавить проверку на ввод текстовых значений
// hSСhOol СomPAnY-> #hschoolcompany
const str = "hschool company";

if (isNaN(str)) {
    console.log("#" + str.split(' ').join('').toLowerCase());
} else ("Ошибка ввода");