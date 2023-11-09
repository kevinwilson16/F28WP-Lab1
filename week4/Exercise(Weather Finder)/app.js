const apiKey = 'a8e02f0920848c9c4d5dffd76848a6ba';

// Create variables to store references to DOM elements
const cityInput = document.getElementById('cityInput');
const btn = document.getElementById('btn');
const weatherInfoDiv = document.getElementById('weather-info');

let weatherData = ''; // Initialize an empty string to store accumulated weather data

// Add an event listener to the button to detect when it is clicked
btn.addEventListener('click', () => {
  const cityName = cityInput.value.trim();
  
  if (!cityName) {
    alert('Please enter a city name');
    return;
  }

  // Make an HTTP request to the OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error fetching weather data');
      }
    })
    .then(data => {
      const { main, weather, wind } = data;

      const weatherDescription = weather[0].description;
      const cityMainTemp = main.temp;
      const windSpeed = wind.speed;

      // Create a new weather block with the current city's data
      const newWeatherBlock = `
        <hr>
        <p>The weather in ${cityName} is ${weatherDescription}.</p>
        <p>The temperature is ${cityMainTemp}°C with a wind speed of: ${windSpeed} m/s.</p>
      `;

      // Prepend the new weather block to the existing weather data
      weatherData = newWeatherBlock + weatherData;

      // Update the weather info div with the updated weather data
      weatherInfoDiv.innerHTML = weatherData;
    })
    .catch(error => {
      console.error('Error:', error);
      weatherInfoDiv.innerHTML = '<p>An error occurred while fetching weather data.</p>';
    });
});