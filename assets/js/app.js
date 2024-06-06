let currentJoke = {};

async function getJoke() {
    try {
        const response = await fetch('https://carambarback-0t3e.onrender.com/api/jokes/random');  // Remplacez par l'URL de votre back-end
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
