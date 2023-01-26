"use strict";
const API_URL = 'https://icanhazdadjoke.com';
const HTMLResponse = document.querySelector('result');
const header = {headers: {Accept: "application/json" }};
fetch(API_URL, header).then((response) => response.json()).then((data) => {
    const joke = data.joke;
    //document.getElementById('result')!.innerHTML = joke
    console.log(joke);
    return joke
});
