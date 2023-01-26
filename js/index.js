"use strict";
const API_URL = 'https://icanhazdadjoke.com';
const HTMLResponse = document.querySelector('result');
const header = {headers: {Accept: "application/json" }};
function nextYoke(){
fetch(API_URL, header).then((response) => response.json()).then((data) => {
    const joke = data.joke;
    console.log(joke);
    return joke
});
}