const express = require('express');
require("dotenv").config()
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("./config/mongo").connect()

const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));

// Cors
let cors = require('cors')
app.use(cors({origin: '*'}))

// JSON
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Route
const routes = require('./routes')
app.use('/', routes)

module.exports = app