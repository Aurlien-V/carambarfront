document.addEventListener("DOMContentLoaded", function() {
    const jokeContainer = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke-button');

    newJokeButton.addEventListener('click', async () => {
        const response = await fetch('/api/jokes/random');
        const data = await response.json();
        jokeContainer.innerText = data.joke;
    });
});
