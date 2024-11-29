const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Game = require('./database');

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Video Game Catalog API');
});

app.get('/games', async (req, res) => {
    const games = await Game.findAll();
    res.json(games);
});

app.post('/games', async (req, res) => {
    const newGame = await Game.create(req.body);
    res.json(newGame);
});

app.delete('/games/:id', async (req, res) => {
    await Game.destroy({ where: { id: req.params.id } });
    res.json({ message: 'Game deleted' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});