const express = require("express");
const app = express();
const { getAllData } = require('./service.js')

app.get('/', (req, res) => {
    const data = getAllData();
    res.send(data);
});

app.post('/', (req, res) => {
    res.send('data');
})

app.listen(3000, () => console.log('server is running'))