// Global variables
var APIKey = '984f54fcdc9daa25320792f531c6ecc3'
var input = document.getElementById('search-city')
var searchButton = document.getElementById('search-button')

function searchCity(){
    var inputValue = input.val()
    console.log(inputValue)
}





// document.getElementById('search-city').value


// function searchCity(){

// }



// function currentWeather(input){
//     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ input +"&units=imperial&appid="+ APIKey;
//     fetch(queryURL)
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
            
//         })
// }











// data[0].name

// fetch('http://api.openweathermap.org/geo/1.0/direct?q='+ city +'&limit=5&appid='+ APIKey)
//     .then(res => {
//         return res.json()
//     })
//     .then(data => {
//         console.log(data[0])

//         var lat = data[0].lat 
//         var lon = data[0].lon
//         fetch('http://api.openweathermap.org/data/2.5/forecast?lat='+ lat +'&lon='+ lon +'&appid='+ APIKey)
//             .then(res => {
//                 return res.json();
//             })
//             .then(data => {
//                 console.log(data);
//             });
//     })







