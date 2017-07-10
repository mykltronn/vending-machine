const express = require('express');
const app = express();
const router = express.Router;

const custRoute = require('./customer.js');
const vendRoute = require('./vendor.js')
router.use('/customer', custRoute);
router.use('/vendor', vendRoute);







module.exports = router;
