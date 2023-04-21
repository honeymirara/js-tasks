const express = require('express');
const app = express();

const { getAll, getDataById } = require('./service/service.js');


app.get('/', function (req, res) {
    const data = getAll()
    res.send(data);
})


app.get('/:id', function (req, res) {
    const { id } = req.params;
    const data = getDataById(id);
    res.send(data);
})


app.post('/', function (req, res) {
    const { label, category, priority } = req.body;
    const data = createData;
    res.send
})

app.listen(3000, () => {
    console.log('serever is running');
});