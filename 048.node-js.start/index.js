const express = require("express"); // require - ключевое слово, с помощью него  мы можем импортирвать. Слово экспресс- зарезервивонное слово библитоеки  внашей директории
const app = express();  // cоздаем приложение от express-а и пишем переменную app
const port = 3000;


app.get("/", function (request, response) {
    const arr = [1, 2, 2, 4, 4];
    let arrUniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1] && arr[i] != arr[i - 1]) {
            arrUniq.push(arr[i]);
        }
    }
    response.send(arrUniq);

});

app.get("/about", function (request, response) {
    response.send('/about')
});

app.get("/contact", function (request, response) {
    response.send('/contact')
});

app.get("/test/:id/:name/hi", function(request, response){
    const {
        id,
        name,
     } = request.params
    response.send([id, name])
})

app.get(`/:id`, (request, response) =>{
    const {
        id
    } = req.params;
    const arr = [1, 2, 3, 5, 6,];
    let wrapper = [];
    let temp =[];
    for (let i = 0; i<arr.length; i++){
        const element = arr[i];
    }
});

app.listen(port, () => {
    console.log(`serever is running on port ${port}`);
});





