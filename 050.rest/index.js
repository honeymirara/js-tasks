const express = require('express');
const { getAll, getDataById, createData, updateData, deleteData } = require('./service/service.js');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json())

app.get('/', function (req, res) {
    const data = getAll()
    res.send(data);
})


app.get('/:id', function (req, res) {
    try {
        const { id } = req.params;
        const data = getDataById(id);
        res.send(data);
    } catch (err) {
        res.send(err.message)
    }
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
    const { id } = req.params;
    const data = deleteData(id);
    res.send(data);
})

app.listen(3000, () => {
    console.log('serever is running');
});