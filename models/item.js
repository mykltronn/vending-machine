const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new mongoose.Schema({
    {
      "id": Number,
      "description": String,
      "cost": Number,
      "quantity": Number
    }
})

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
