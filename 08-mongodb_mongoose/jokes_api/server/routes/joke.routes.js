const JokeController = require("../controllers/joke.controller")
const Joke = require("../models/joke.model")

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes)

    app.get('/api/jokes/random', JokeController.findOneRandomJoke)
    
    app.get('/api/jokes/:id', JokeController.findOneJoke)


    app.post('/api/jokes/new', JokeController.createNewJoke)

    app.put('/api/jokes/update/:id', JokeController.updateJoke)

    app.delete('/api/jokes/delete/:id', JokeController.deleteJoke)
}