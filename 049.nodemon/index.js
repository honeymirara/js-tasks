const express = require("express");

const { getAllData } = require('./service.js')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = getAllData();
    res.send(data);
});

app.post('/', (req, res) => {
    res.send('data');
})

app.listen(3000, () => console.log('server is running'))