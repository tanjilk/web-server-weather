const path = require('path');

const express = require('express');

const hbs = require('hbs');

const app = express()

console.log(__dirname);
// console.log(__filename);

console.log(path.join(__dirname, '../public'));

const publicDirectory = path.join(__dirname, '../public');
const view_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs')
app.set('views', view_path);

hbs.registerPartials(partial_path);

app.use(express.static(publicDirectory));

// 1-setup the template for the footer partial "created by some name"
// 2. Render the partial at te bottom of all three pages


/*
app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})
*/

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Tanjil Khan',
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'The help message',
        name: 'Bart'
    })
})

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