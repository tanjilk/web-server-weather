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