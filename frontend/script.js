const apiUrl = 'http://localhost:4000/games';

async function fetchGames() {
    const response = await fetch(apiUrl);
    const games = await response.json();
    displayGames(games);
}

function displayGames(games) {
    const gameList = document.getElementById('game-list');
    gameList.innerHTML = '';
    games.forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.classList.add('game-item');
        gameItem.innerHTML = `
            <h2>${game.title}</h2>
            <p>Platform: ${game.platform}</p>
            <p>Release Year: ${game.releaseYear}</p>
            <button onclick="deleteGame('${game.id}')">Delete</button>
        `;
        gameList.appendChild(gameItem);
    });
}

async function addGame(game) {
    await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
    fetchGames();
}

async function deleteGame(id) {
    await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE'
    });
    fetchGames();
}

// Initial fetch
fetchGames();

async function handleAddGame(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const platform = document.getElementById('platform').value;
    const releaseYear = document.getElementById('releaseYear').value;
    const newGame = { title, platform, releaseYear };
    await addGame(newGame);
    document.getElementById('title').value = '';
    document.getElementById('platform').value = '';
    document.getElementById('releaseYear').value = '';
}