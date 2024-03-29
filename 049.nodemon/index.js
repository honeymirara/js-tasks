const express = require("express");

const { getAllData, createData, updateData, deleteData } = require('./service.js')
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = getAllData();
    res.send(data);
});

app.post('/', (req, res) => {
    const {
        name,
        age
    } = req.body;
    const data = createData(name, age);
    res.send(data);
})

app.put('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        age
    } = req.body;
    const update = updateData(id, name, age);
    res.send(update);
});

app.delete('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const data = deleteData(id);
    res.send(data);
})


app.listen(3000, () => console.log('server is running'))