const express = require('express');
const app = express();



app.get('/', (req, res) => {
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