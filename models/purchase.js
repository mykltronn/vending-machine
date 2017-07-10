const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new mongoose.Schema({
  item: Number,
  cost: Number,
  paid: Number
})

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
