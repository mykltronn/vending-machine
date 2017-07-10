const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/vending-machinedb')


const router = express.Router();
const route = require('./routes/api.js');

app.use('/api', route);
