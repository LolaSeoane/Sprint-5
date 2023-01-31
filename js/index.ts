
const reportJokes: any = []

function nextJoke() {
    const API_URL = 'https://icanhazdadjoke.com'
    const header = { headers: { Accept: "application/json" } }

    const scoreButton = document.getElementById(
        "scoreButtons"
    ) as HTMLButtonElement;

    scoreButton.style.display = "";


    fetch(API_URL, header).then((response) => response.json()).then((data) => {
        const joke = data.joke
        console.log(joke)
        document.getElementById('result')!.innerHTML = joke
        return joke
    })
}
function getPoints(id: number) {
    const punctuation: number = id
    const textDate = new Date().toISOString()
    const lastJoke: any = document.getElementById('result')?.outerText;
    const textLastJoke: String = lastJoke
    const jokeIndex = reportJokes.findIndex((e: any) => textLastJoke === e.joke);
    const jokes = { joke: textLastJoke, score: punctuation, date: textDate }
    
    if (textLastJoke !== '' && jokeIndex < 0) {
        reportJokes.push(jokes)
    }
    else {
        reportJokes[jokeIndex].score = punctuation
        
    }
    console.log(reportJokes)
}


