"use strict";
// Obteniendo la ubicación del usuario con HTML5 Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // Haciendo una solicitud a OpenWeatherMap API para obtener el tiempo
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=26e4714b232ad047024b8f3db887092f`)
            .then(response => response.json())
            .then((data) => {
            const weather = data.weather;
            const weatherDescription = weather[0].description;
            console.log(data);
            console.log(weatherDescription);
            document.getElementById('textWeather').innerHTML = `Today: ${weatherDescription}`;
        });
    });
}
const reportJokes = [];
function nextJoke() {
    const API_URL2 = 'https://api.chucknorris.io/jokes/random';
    const API_URL1 = 'https://icanhazdadjoke.com';
    const header = { headers: { Accept: "application/json" } };
    const scoreButton = document.getElementById("scoreButtons");
    scoreButton.style.display = "";
    let randomNumber = Math.round(Math.random());
    if (randomNumber === 0) {
        fetch(API_URL1, header).then((response) => response.json()).then((data) => {
            const joke = data.joke;
            console.log(joke);
            document.getElementById('result').innerHTML = joke;
            return joke;
        });
    }
    else {
        fetch(API_URL2).then((response) => response.json()).then((data) => {
            const joke2 = data.value;
            console.log(joke2);
            document.getElementById('result').innerHTML = joke2;
            return joke2;
        });
    }
}
function getPoints(id) {
    var _a;
    const punctuation = id;
    const textDate = new Date().toISOString();
    const lastJoke = (_a = document.getElementById('result')) === null || _a === void 0 ? void 0 : _a.outerText;
    const textLastJoke = lastJoke;
    const jokeIndex = reportJokes.findIndex((e) => textLastJoke === e.joke);
    const jokes = { joke: textLastJoke, score: punctuation, date: textDate };
    if (textLastJoke !== '' && jokeIndex < 0) {
        reportJokes.push(jokes);
    }
    else {
        reportJokes[jokeIndex].score = punctuation;
    }
    console.log(reportJokes);
}
