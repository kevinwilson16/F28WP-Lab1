var myCity = [

    {
        "name": "Dubai",
        "country": "UAE",
        "place": "Dubai Mall"
    },

    {
        "name": "Milan",
        "country": "Italy",
        "place": "Duomo Di Milano"
    },

    {
        "name": "Moscow",
        "country": "Russia",
        "place": "Bolshoi Theatre"
    }

]

function displayCities(city) {
    var cityInfo = '';
    city.forEach(function (item) {
      cityInfo += `
        <div class="city-card">
          <h2>${item.name}, ${item.country}</h2>
          <p>${item.place}</p>
        </div>
      `;
    });
    $('#city-info').html(cityInfo);
}

$('#btn').click(function() {
    displayCities(myCity);
});