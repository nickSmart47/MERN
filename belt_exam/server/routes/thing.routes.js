const ThingController = require('../controllers/thing.controller');

module.exports = (app) => {
    app.post('/api/things', ThingController.createThing)
    app.get('/api/things', ThingController.getAllThings)
    app.get('/api/things/:id', ThingController.getThing)
    app.put('/api/things/:id', ThingController.updateThing)
    app.delete('/api/things/:id', ThingController.deleteThing)
}