const express = require('express');
const { getAll, getDataById, createData, updateData } = require('./service/service.js');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

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
    const data = createData(label, category, priority);
    res.send(data);
});

app.put('/:id', function (req, res) {
    const { id } = req.params;
    const { label, category, priority } = req.body;
    const data = updateData(id, label, category, priority);
    res.send(data);
});

app.delete('/:id', function (req, res) {
    const 
})

app.listen(3000, () => {
    console.log('serever is running');
});