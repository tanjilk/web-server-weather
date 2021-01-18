console.log('Client side javascript is loeaded!');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
  })
})


fetch('http://localhost:3000/weather?search=porto').then((response) => {
    response.json().then((data, error) => {
        if(error){
            console.log(error)
        }
        console.log(data);

    })
})

const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');


const firstMessage = document.querySelector('#message-1');
firstMessage.textContent = '';

const secondMessage = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchElement.value;
        
    urlLocation = 'http://localhost:3000/weather?search=' + location;
    secondMessage.textContent = 'Loading';
    secondMessage.textContent = '';
    fetch(urlLocation).then((response) => {
        response.json().then((data, error) => {
            if(error){
                console.log(error);
                secondMessage.textContent = error;
            }
            console.log(data);
            secondMessage.textContent = data.weather_main;
        })
    })

    console.log(location);
})