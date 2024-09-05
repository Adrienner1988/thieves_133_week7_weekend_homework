# Weather App
![Project Screenshot](src/images/Weather-Screenshot.png)

## Table of Contents
1. [About](#about)
2. [Video](#video)
3. [Tech](#tech)
4. [Features](#features)
5. [Getting Started](#getting-started)
6. [Code Examples](#code-examples)
7. [Status](#status)
8. [Why](#why)
9. [Contact](#contact)
10. [License](#license)


## About
A simple weather application built with Vanilla JavaScript allows users to search for real-time weather information for any city or area. 
The app interacts with the Open Weather API to fetch live data, dynamically updating the user interface through DOM manipulation. 

## Video
[Watch the demo](https://drive.google.com/file/d/1GlM8WRAqNt5j90L1zP06Nl4w_Ird0IUF/view?usp=sharing)

## Tech 
- HTML5
- CSS3
- JavaScript ES6
- Open Weather API

## Features
- Real-Time Weather Search
- Dynamic Weather Display
- API Integration
- Responsive Design
- Error Handling
- Customizable UI

## Getting Started

### Prerequisites
- A web browser

### Usage
You can access the live version of the application here: [Live Demo](https://ad-weather-api.netlify.app/)

### Cloning the Repository (Optional)
If you still want to clone the repository and explore the code:
1. Clone the repository:  `git clone https://github.com/Adrienner1988/thieves_133_week7_weekend_homework.git`
2. Navigate to the project directory: `cd thieves_133_week7_weekend_homework`
3. Open the project: `Open index.html in your preferred web browser`

## Code Examples
```javascript
if (response.ok) {
    //parsing through the data
    cityName.textContent = data.name;
    weatherIconDiv.innerHTML = `
        <img src=https://openweathermap.org/img/wn/${data.weather[0].icon}.png />
    `;
    weatherConditions.innerHTML = `
        <p>${data["weather"][0].main}</p>
        <h2>${data["main"]["temp"]}°F</h2>
        <p>High ${data["main"]["temp_max"]}°F</p>
        <p>Low ${data["main"]["temp_min"]}°F</p>
        `;

    // Show weather display after data is rendered
    weatherDisplay.style.display = "block";
  } else {
    // Show error message if the response is not okay
    alert("City not found. Please enter a valid city name.");
  }
};
```

## Status
Complete

## Why
This project was built to strengthen my skills in frontend development, specifically in Vanilla JavaScript, DOM manipulation, and working with APIs. 
By fetching real-time weather data from an external API, I aimed to gain hands-on experience in handling asynchronous operations and data parsing. 
Additionally, this project showcases my ability to implement interactive and dynamic functionality using core web technologies.

## Contact:
- Email: `adriennerdaniels@gamil.com`
- LinkedIn: `https://www.linkedin.com/in/adriennerdaniels/`
- GitHub: `Adrienner1988`

## License
This project is currently not licensed.
