const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Creates an express object
const app = express()

// Gets the currentyle dir name
console.log(__dirname);
//console.log(path.join(__dirname, '../public'));

// Configure the express paths
const publicDirectory = path.join(__dirname, '../public');
const view_path = path.join(__dirname, '../templates/views');
const partial_path = path.join(__dirname, '../templates/partials');

// Set the engines views
app.set('view engine', 'hbs')
app.set('views', view_path);

// Configure the partials hbs
hbs.registerPartials(partial_path);

// Configures the static files with express static
app.use(express.static(publicDirectory));


app.get('/testit', (req, res) => {
    res.send({
        shopName: 'sportzone',
        shopLimitPer: 25
    })
})


/*
app.get('', (req, res) => {
    res.send('<h1>Hello Express</h1>');
})
*/

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Bart',
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

app.get('/itsmemario', (req, res) => {
    res.render('mario', {
        message: 'Quando o Gouveia é penta campeao nas faltas disciplinares',
        name: 'Me, MARIO!'
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

app.get('/help/*', (req, res) => {
    res.send('Bart could not help you... He didnt found anything!');
})

app.get('*', (req, res) => {
    res.send('Sorry, but this page doesnt exists, please double check it! :|');
})

app.listen(3000, () => {
    console.log('Running the app in 3000.');
});