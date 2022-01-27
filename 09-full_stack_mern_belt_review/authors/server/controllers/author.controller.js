const { response } = require('express');
const { Author } = require('../models/author.model')


module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}


module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.find({ _id: req.params.id })
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id },
        req.body,
        { new: true, runValidators: true}
    )
        .then(updatedAuthor => {
            // console.log(res.json)
            res.json(updatedAuthor)
        })
        .catch(err => {console.log(err)
            res.json(err)})
}
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => response.json(err))
}