const express = require('express');
const { getAll } = require('./service');

const app = express();


app.get('/', (req, res) => {
    const data = getAll();
    res.send('it is a get-request');
});

app.post('/', (req, res) => {
    res.send('it is a post-request');
});

app.put('/', (req, res) => {
    res.send('it is put-request');
});

app.listen(3000, () => {
    console.log('server is running');
})