//DOM Objects
const cityName = document.querySelector('.city-name');

//image
const weatherIconDiv = document.querySelector('.weather-icon');

//weather high/low
const weatherConditions = document.querySelector('.weather-conditions');

// Hide weather display initially
const weatherDisplay = document.querySelector('.weather-display');
weatherDisplay.style.display = 'none';

//Calling API
const weatherApi = async (cityname) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a889a853f78d336ee0ec8ca80895b827&units=imperial`);
    const data = await response.json();

    if (response.ok) {
    //parsing through the data
    cityName.textContent = data.name
    weatherIconDiv.innerHTML = `
        <img src=https://openweathermap.org/img/wn/${data.weather[0].icon}.png />
    `
    weatherConditions.innerHTML = `
        <p>${data['weather'][0].main}</p>
        <h2>${data['main']['temp']}°F</h2>
        <p>High ${data['main']['temp_max']}°F</p>
        <p>Low ${data['main']['temp_min']}°F</p>
        `

    // Show weather display after data is rendered
    weatherDisplay.style.display = 'block';

} else {

    // Show error message if the response is not okay
    alert('City not found. Please enter a valid city name.');
}
};


//grabbing data from the form
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form[0].value;
    weatherApi(inputValue);
    form[0].value = '';
});