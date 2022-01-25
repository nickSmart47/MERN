// controller needs to  be able to talk to models
const Ninja = require('../models/ninja.model');


module.exports.sayHello = (req, res)=>{
    res.json({msg: "Hello mongoose modularized!"})
}

module.exports.findAllNinjas = (req, res) => {
    Ninja.find()
        .then(allNinjas=> {
            res.json({results: allNinjas})
        })
        .catch(err => res.json({message: "Something went wrong", error: err }))
}

module.exports.findOneNinja = (req, res) => {
    Ninja.findOne({_id: req.params.id})
        .then(singleNinja =>{
            res.json({results: singleNinja})
        })
        .catch(err => res.json({message: "Something went wrong", error: err })) 
}

module.exports.createNewNinja = (req, res) => {
    console.log(req.body)
    Ninja.create(req.body)
        .then(newlyCreatedNinja => 
            res.json({results: newlyCreatedNinja}))
        .catch(err => res.json({message: "something went wrong", err}))
}

module.exports.updateNinja = (req, res) => {
    Ninja.findOneAndUpdate({_id: req.params.id},
        req.body,
        { new: true, runValidators: true})
        .then(updatedNinja =>{
            res.json({results: updatedNinja})
        })
        .catch(err => res.json({message: "Something went wrong", error: err })) 
}

module.exports.deleteNinja = (req, res) => {
    Ninja.delete
}