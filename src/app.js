const path = require('path');
const express = require('express');
const hbs = require('hbs');

const forecast = require('./utils/geofor/forecast');
const geocode = require('./utils/geofor/geocode');

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
        name: 'Khan',
    });
});

app.get('about', (req, res) => {
    res.render('about', {
        title: 'About page',
        name: 'Khan'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Try to search the solution to your problem on this page!',
        name: 'Khan'
    })
})


app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'You must provide a search term!'
        })
    }

    console.log(req.query);
    res.send({
        products: []
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.search)
        return res.send({
            error: 'You must provide an address!'
        });

    geocode(req.query.search, {}).then(data => {
        
        forecast(data.latitude, data.longitude, (error, datafor) => {

            res.send({
                place: data.place_name,
                temperature: datafor.temperature,
                pressure: datafor.pressure,
                humidity: datafor.humidity,
                weather_main: datafor.weather_main
            });
        })
    }).catch(error => {
        res.send(error);
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
    res.render('error404bart', {
        message: 'Bart could not get it... No page found! :|',
        name: 'Bart'
    });
});

app.get('*', (req, res) => {
    //res.send('Sorry, but this page doesnt exists, please double check it! :|');
    res.render('error404', {
        message: 'Page not found'
    })
});


app.listen(3000, () => {
    console.log('Running the app in 3000.');
});