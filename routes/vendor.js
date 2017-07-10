const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vending-machinedb')


const router = express.Router();

//================================================

// get a list of all purchases with their item and date/time
router.get('/purchases', function(req, res){

})

//GET /api/vendor/money - get a total amount of money accepted by the
router.get('/money', function(req, res){

})

//POST /api/vendor/items - add a new item not previously existing in the machine
router.post('/items', function (req, res){

})

//PUT /api/vendor/items/:itemId - update item quantity, description, and cost
router.post('/items/:itemId', function (req, res){

})



//================================================
module.exports = router;
