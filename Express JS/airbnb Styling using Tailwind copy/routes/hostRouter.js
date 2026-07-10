const express = require('express');
const hostRouter = express.Router();

const homesController = require('../controllers/homesController');


hostRouter.get('/add-home', homesController.addHomes);
    

hostRouter.post('/add-home', homesController.postHomes);

exports.hostRouter = hostRouter;
exports.homes = homesController.homes;