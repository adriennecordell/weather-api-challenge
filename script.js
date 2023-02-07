// Global variables
var inputEl = document.querySelector('search-city')
var searchButton = document.querySelector('#search-button')
var apiKey = "984f54fcdc9daa25320792f531c6ecc";
var currentDayEl = document.getElementsByClassName("forecast-headding");
var temp = document.getElementById('temp0')
var wind = document.getElementById('wind0')
var humidity = document.getElementById('humidity0')

//search function for app
function searchHandler(event) {
  event.preventDefault();
  var location = inputEl.value.trim();

  localStorage.setItem("cities", JSON.stringify(pastSearchCities));
  localStorage.setItem("city", location);

  currectDayForecast(location);
  fiveDayForcast(location);
}
//gets current forecast
function currectDayForecast(location) {
  var cityUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    location +
    "&units=imperial&appid=" +
    apiKey;

  fetch(cityUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (citys) {
      currentDayEl.innerHTML = "";

      console.log(citys);
      var cityLocalStorage = localStorage.getItem("city");
      citys.textContent = citys.name + " " + dateEl;
      temp.textContent = "Temp: " + citys.main.temp + " F";
      wind.textContent = "Wind: " + citys.wind.speed + " MPH";
      humidity.textContent = "Humidity: " + citys.main.humidity + " %";
    //   var weatherIcon = document.createElement("img");
    //   var currentDay = document.createElement("div");

      currentDayEl.prepend(currentDay);

      currentDay.append(citys);
      citys.append(weatherIcon);
      currentDay.append(temp);
      currentDay.append(wind);
      currentDay.append(humidity);

      if (!pastSearchCities.includes(cityLocalStorage)) {
        renderPastCitiesBtn(cityLocalStorage);
      }
      console.log(
        pastSearchCities,
        cityLocalStorage,
        !pastSearchCities.includes(cityLocalStorage)
      );
      pastSearchCities.push(cityLocalStorage);
      inputEl.value = "";
    })
    .catch((error) => {
      alert("Error 404: Not Found");
      inputEl.value("");
    });
}

//gets five day forecast
// function fiveDayForcast(location) {
//   var forcastUrl =
//     "https://api.openweathermap.org/data/2.5/forecast?q=" +
//     location +
//     "&units=imperial&appid=" +
//     apiKey;

//   fetch(forcastUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (forecast) {
//       fiveForcast.innerHTML = " ";
//       console.log(forecast);
//       for (var i = 2; i < forecast.list.length; i += 8) {
//         var fiveDay = document.getElementsById('future-weather');
//         var temp = document.createElement("p");
//         var wind = document.createElement("p");
//         var humidity = document.createElement("p");
//         var weatherIcon = document.createElement("img");

//         date.textContent = moment.unix(forecast.list[i].dt).format("MM-DD-YYYY");
//         temp.textContent = "Temp: " + forecast.list[i].main.temp + " F";
//         wind.textContent = "Wind: " + forecast.list[i].wind.speed + " MPH";
//         humidity.textContent =
//           "Humidity: " + forecast.list[i].main.humidity + " %";

//         fiveForecast.append(fiveDay);
//         fiveDay.append(weatherIcon);
//         fiveDay.append(temp);
//         fiveDay.append(wind);
//         fiveDay.append(humidity);
//       }
//     });
// }

searchButton.addEventListener("submit", searchHandler);







