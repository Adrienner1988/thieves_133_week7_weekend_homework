//DOM Objects
const cityName = document.querySelector('.city-name');
console.log(cityName);

//image
const imageIcon = document.querySelector('#icon');
console.log(imageIcon);

// main-temp
const mainTemp = document.querySelector('#temp');
console.log(mainTemp);

//weather description
const description = document.querySelector('#description');
console.log(description);

//main-max-high
const highTemp = document.querySelector('#high');
console.log(highTemp);

//main-max-low
const lowTemp = document.querySelector('#low');
console.log(lowTemp);



//Calling API
const weatherApi = async () => {
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?zip=33974,us&appid=a889a853f78d336ee0ec8ca80895b827&units=imperial');
    const data = await response.json();
    console.log(data)

    //parsing through the data
    cityName.textContent = data['name'];
    imageIcon.textContent = data['weather'][0].icon
    mainTemp.textContent = data['main']['temp']
    description.textContent = data['weather'][0].main
    highTemp.textContent = data['main']['temp_max']
    lowTemp.textContent = data['main']['temp_min']
};
weatherApi();


//grabbing data from the form
const form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = form[0].value;
    weatherApi(inputValue);
    form[0].value = '';
})