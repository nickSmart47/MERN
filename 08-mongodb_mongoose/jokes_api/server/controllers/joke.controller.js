// controller needs to  be able to talk to models
const { count } = require('../models/joke.model');
const Joke = require('../models/joke.model');



module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes=> {
            res.json({results: allJokes})
        })
        .catch(err => res.json({message: "Something went wrong", error: err }))
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then(singleJoke =>{
            res.json({results: singleJoke})
        })
        .catch(err => res.json({message: "Something went wrong", error: err })) 
}

module.exports.findOneRandomJoke = (req, res) => {
    // simple way using aggregate mongoose function
    Joke.aggregate([{ $sample: { size: 1 }}])
        .then(randomJoke => {
            res.json({results: randomJoke})
        })
        .catch(err => res.json({message: "Something went wrong", error: err }))  
}

module.exports.findRandomJoke = (req, res)=>{
    // more traditional way using Math.random
    console.log("trying to find a random joke")

    function getRandomInt(max){
        return Math.floor(Math.random() * max);
    }
    Joke.find()
        .then(allJokes =>{
            let randomIndex = getRandomInt(allJokes.length)
            res.json({results: allJokes[randomIndex]})
        })
        .catch(err => res.json({message: "Something went wrong", error: err }))
}

module.exports.createNewJoke = (req, res) => {
    console.log(req.body)
    Joke.create(req.body)
        .then(newlyCreatedJoke => 
            res.json({results: newlyCreatedJoke}))
        .catch(err => res.json({message: "something went wrong", err}))
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true})
        .then(updatedJoke =>{
            res.json({results: updatedJoke})
        })
        .catch(err => res.json({message: "Something went wrong", error: err })) 
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Something went wrong", error: err })) 
}