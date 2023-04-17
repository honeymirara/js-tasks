const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send('it is get-requesrt');
})

app.post('/', function(req, res){
    res.send('it is post')
})

app.listen(3000, function(){
    console.log('server is running');
})