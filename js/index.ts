const API_URL = 'https://icanhazdadjoke.com'

const HTMLResponse = document.querySelector('result') 

fetch(`${API_URL}/`).then((response) =>response.json()).then((data) => {
    const joke = data.joke
    //document.getElementById('result')!.innerHTML = joke
    console.log(joke)
})