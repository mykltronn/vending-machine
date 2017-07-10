const assert = require("assert")
const request = require("supertest")
const mongoose = require('mongoose');
const app = require("../app")

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vending-machinedb');

const Item = require('../models/item.js');
const Purchase = require('../models/purchase.js')
//A customer should be able to get a list of the current items, their costs, and quantities of those items
describe("GET /api/customer/items", function() {
  beforeEach(function (done) {
    Item.deleteMany({}).then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    Purchase.deleteMany({}).then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    var newItem = new Item();
    newItem.status = "success"
    newItem.id = 1;
    newItem.description = "Twizzler";
    newItem.cost = 250;
    newItem.quantity = 300;

    newItem.save().then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    var newPurschase = new Purchase();
    newPurschase.item = Item.id
    newPurschase.cost = Item.cost
    newPurschase.paid = 300

    newPurschase.save().then(() => done()).catch(done);
  });

  it('should show item name', function(done) {
    request(app)
        // get items name
         .get("/api/customer/items")
         .expect(200)
         .expect(res.body.item.description)
         .end(done)
  })

  it('should show item cost', function(done){
    request(app)
         .get('/api/customer/items')
         .expect(200)
         .expect(res.body.item.cost)
         .end(done)
  })

  it('should show item quantity', function(done){
    request(app)
         .get('/api/customer/items')
         .expect(200)
         .expect(res.body.item.quantity)
        //  .expect(function(res){
        //    assert.equal(res.body.item.quantity)
        //  })
         .end(done)
  })
})


//A customer should be able to buy an item using money
//the fuck does that mean ^ ^ ^
describe("GET /api/customer/items", function() {
  beforeEach(function (done) {
    Item.deleteMany({}).then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    Purchase.deleteMany({}).then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    var newItem = new Item();
    newItem.status = "success"
    newItem.data += {
      "id" : 1,
      "description" : "Twizzler",
      "cost" : 250,
      "quantity" : 300
    }
    newItem.save().then(() => done()).catch(done);
  });

  beforeEach(function (done) {
    var newPurschase = new Purchase();
    newPurschase.item = 1
    newPurschase.cost = 250
    newPurschase.paid = 300

    newPurschase.save().then(() => done()).catch(done);
  });

  it('should do some shit', function(done){
    request(app)
         .get('/api/someplace)
         .expect(200)
         .expect(res.body.item.quantity)
        //  .expect(function(res){
        //    assert.equal(res.body.item.quantity)
        //  })
         .end(done)
  })
});


A customer should be able to buy an item using money
A customer should be able to buy an item, paying more than the item is worth (imagine putting a dollar in a machine for a 65-cent item) and get correct change. This change is just an amount, not the actual coins.
A customer should not be able to buy items that are not in the machine, but instead get an error
A vendor should be able to see total amount of money in machine
A vendor should be able to see a list of all purchases with their time of purchase
A vendor should be able to update the description, quantity, and costs of items in the machine
A vendor should be able to add a new item to the machine
