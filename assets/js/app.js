let currentJoke = {};

async function getJoke() {
    const loadingElement = document.getElementById('loading');
    const jokeElement = document.getElementById('joke');

    // Afficher l'animation de chargement
    loadingElement.style.display = 'block';
    jokeElement.style.display = 'none';

    try {
        const response = await fetch('https://carambarback-0t3e.onrender.com/api/jokes/random');  // Remplacez par l'URL de votre back-end
        currentJoke = await response.json();
        jokeElement.innerHTML = currentJoke.question;
    } catch (error) {
        console.error('Error fetching joke:', error);
        jokeElement.innerHTML = 'Erreur lors de la récupération de la blague. Veuillez réessayer.';
    } finally {
        // Masquer l'animation de chargement et afficher la blague
        loadingElement.style.display = 'none';
        jokeElement.style.display = 'block';
    }
}

function showAnswer() {
    if (currentJoke.answer) {
        document.getElementById('joke').innerHTML += `<br><br>${currentJoke.answer}`;
    } else {
        alert('Cliquez d\'abord sur "Nouvelle Devinette" pour obtenir une blague.');
    }
}
