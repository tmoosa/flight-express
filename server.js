require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const Flight = require('./models/flight')
const mongoose = require('mongoose')