const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist&type=single";
let joke = document.getElementById("joke");

function getJoke() {
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.joke)
    });       
}

getJoke();