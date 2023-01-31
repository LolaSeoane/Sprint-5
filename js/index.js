"use strict";
const reportJokes = [];
function nextJoke() {
    const API_URL = 'https://icanhazdadjoke.com';
    const header = { headers: { Accept: "application/json" } };
    const scoreButton = document.getElementById("scoreButtons");
    scoreButton.style.display = "";
    fetch(API_URL, header).then((response) => response.json()).then((data) => {
        const joke = data.joke;
        console.log(joke);
        document.getElementById('result').innerHTML = joke;
        return joke;
    });
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
