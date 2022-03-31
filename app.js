const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=single";

function getJoke() {
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(data => {
        let insertJoke = document.getElementById("joke");
        let joke = data.joke
        insertJoke.innerHTML = joke
    });       
}

getJoke();