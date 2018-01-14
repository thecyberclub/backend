var UserCtrl = require('../controllers/UserCtrl');

var api = require('express').Router();

// Users API
api.get('/users', UserCtrl.getAll);
api.post('/users', UserCtrl.postOne);

module.exports = api;


// GET    /session/new gets the webpage that has the login form
// POST   /session authenticates credentials against database
// DELETE /session destroys session and redirect to /
// GET  /users/xxx // gets and renders current user data in a profile view
// POST /users/xxx // updates new information about user
