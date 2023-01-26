// Global variables
var APIKey = 'dd3c8bf55d91ab4371e0acb375048f53'


fetch('https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={dd3c8bf55d91ab4371e0acb375048f53}')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data);
    });