let currentJoke = {};

async function getJoke() {
    try {
        const response = await fetch('http://localhost:3000/api/jokes/random');
        currentJoke = await response.json();
        document.getElementById('joke').innerHTML = currentJoke.question;
    } catch (error) {
        console.error('Error fetching joke:', error);
        document.getElementById('joke').innerHTML = 'Erreur lors de la récupération de la blague. Veuillez réessayer.';
    }
}

function showAnswer() {
    if (currentJoke.answer) {
        document.getElementById('joke').innerHTML += `<br><br>${currentJoke.answer}`;
    } else {
        alert('Cliquez d\'abord sur "Nouvelle Devinette" pour obtenir une blague.');
    }
}
