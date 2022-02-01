const { response } = require('express');
const { Thing } = require('../models/thing.model')


module.exports.createThing = (req, res) => {
    const { name, type, description, skillOne, skillTwo, skillThree } = req.body;
    Thing.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(things => res.json(things))
        .catch(err => res.json(err))
}


module.exports.getAllThings = (req, res) => {
    Thing.find({}).sort([['type', 1]])
        .then(things => res.json(things))
        .catch(err => res.json(err))
}

module.exports.getThing = (req, res) => {
    Thing.find({ _id: req.params.id })
        .then(thing => res.json(thing))
        .catch(err => res.json(err))
}

module.exports.updateThing = (req, res) => {
    Thing.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedThing => {
            // console.log(res.json)
            res.json(updatedThing)
        })
        .catch(err => {console.log(err)
            res.json(err)})
}
module.exports.deleteThing = (req, res) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => response.json(err))
}