//DOM Objects
const cityName = document.querySelector('.city-name');


//image
const imageIcon = document.querySelector('#icon');



// main-temp
const mainTemp = document.querySelector('#temp');


//weather description
const description = document.querySelector('#description');


//main-max-high
const highTemp = document.querySelector('#high');


//main-max-low
const lowTemp = document.querySelector('#low');




//Calling API
const weatherApi = async (cityname) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=a889a853f78d336ee0ec8ca80895b827&units=imperial`);
    const data = await response.json();
  

    //parsing through the data
    cityName.textContent = data.name
    imageIcon.src = data.weather.icon
    mainTemp.textContent = data['main']['temp']
    description.textContent = data['weather'][0].main
    highTemp.textContent = data['main']['temp_max']
    lowTemp.textContent = data['main']['temp_min']
};


//grabbing data from the form
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form[0].value;
    weatherApi(inputValue);
    form[0].value = '';
})