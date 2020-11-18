const express = require('express');
const app = express()

app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})

app.get('/weather', (req, res) => {
    res.send('<h1>Your weather</h1');
})

app.get('/about', (req, res) => {
    res.send("<h1>About</h1>");
})

app.listen(3000, () => {
    console.log('Running the app in 3000.');
});