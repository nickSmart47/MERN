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
    Joke.aggregate([{ $sample: { size: 1 }}])
        .then(randomJoke => {
            res.json({results: randomJoke})
        })
        .catch(err => res.json({message: "Something went wrong", error: err })) 


    // let random
    // Joke.countDocuments({})
    //     .then(count =>{
    //         // console.log(count)
    //         random = Math.floor(Math.random() * count)
    //         // console.log("random number is ---->", random)
    //         // console.log("type of random is --->", typeof(random))
    //     })
    //     .then(Joke.findOne().skip(random)
    //         .then(randomJoke =>{
    //             console.log('random is currently', random)
    //             res.json({results: randomJoke, random: random})
    //         })
    //         .catch(err => res.json({message: "Something went wrong", error: err })))
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