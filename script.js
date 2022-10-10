var APIKey = 'f7eb34f9ebbaaa8ad1f043dcbec42918'
var form = document.querySelector('form')
var nameInput = document.getElementById('city-name')
var resultsEl = document.getElementById('results')

function searchCity(event) {
  event.preventDefault()

  // get value out of input
  var cityName = nameInput.value.trim().toLowerCase()

  // fetch request to pokeAPI
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + "&units=imperial&appid=" + APIKey)
    .then(function(response) {
      if (response.status === 200) {
        return response.json()
      } else if (response.status === 404) {
        alert(cityName + ' not found. Search again.')
        nameInput.value = ""
      }
    })
    .then(function(city) {
      // create elements
      var cardDiv = document.createElement('div')
      var cardBody = document.createElement('div')
      var h2 = document.createElement('h2')
      var img = document.createElement('img')
      var abilitiesList = document.createElement('ul')
      
      // modify elements
      cardDiv.classList.add('card')
      cardDiv.classList.add('mb-3')
      cardDiv.classList.add('col-md-4')
      cardBody.classList.add('card-body')
      h2.textContent = city.name
      img.src = pokemon.sprites.front_default
      img.alt = pokemon.name
      img.classList.add('card-img-top')
      
      // abilities
      for (var i = 0; i < pokemon.abilities.length; i++) {
        var li = document.createElement('li')
        li.textContent = pokemon.abilities[i].ability.name
        abilitiesList.append(li)
      }
      
      // append to DOM
      cardBody.append(img)
      cardBody.append(h2)
      cardBody.append(abilitiesList)
      cardDiv.append(cardBody)
      resultsEl.append(cardDiv)

      // reset input
      nameInput.value = ""
    })
}

form.addEventListener('submit', searchCity)