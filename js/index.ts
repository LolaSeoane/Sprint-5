
//const HTMLResponse = document.querySelector('result')
function nextJoke() {
    const header = { headers: { Accept: "application/json" } }
    const API_URL = 'https://icanhazdadjoke.com'

    fetch(API_URL, header).then((response) => response.json()).then((data) => {
        const joke = data.joke
        console.log(joke)
        document.getElementById('result')!.innerHTML = joke
        return joke
    })

}