const path = require('path');

const express = require('express');

const app = express()

console.log(__dirname);
// console.log(__filename);

console.log(path.join(__dirname, '../public'));

const publicDirectory = path.join(__dirname, '../public');

app.use(express.static(publicDirectory));

/*
app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})
*/

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'No raining! Nice!',
        location: 'Porto',
    })
})

app.get('/people', (req, res) => {
    res.send([
        {
            name: 'Tanjil',
            age: 15
        },
        {
            name: 'John',
            age: 20
        },
        {
            name: 'Jeff',
            age: 19,
        },
    ])
});

app.listen(3000, () => {
    console.log('Running the app in 3000.');
});