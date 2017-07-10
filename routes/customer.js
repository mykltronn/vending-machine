const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vending-machinedb')
const aSchema


const router = express.Router();

//================================================


//GET /api/customer/items - get a list of items
router.get('/items', function(req, res){

}

//POST /api/customer/items/:itemId/purchases - purchase an item
router.post('/items/:itemId/purchases', function(req, res){

}

//================================================

module.exports = router;
