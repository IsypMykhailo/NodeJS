let express = require('express');
let app = express();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

let path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// File Loader
const multer = require("multer");
app.use(multer({dest:"uploads"}).single("img"));

let cookieParser = require('cookie-parser');
app.use(cookieParser());

let logger = require('morgan');
app.use(logger('dev'));

let indexRouter = require('./routes/index');
app.use('/', indexRouter);

let usersRouter = require('./routes/users');
app.use('/users', usersRouter);

let studentRouter = require('./routes/students');
app.use('/students', studentRouter);

let portfolioRouter = require('./routes/portfolio');
app.use('/api/portfolios', portfolioRouter);

let mediaHelper = require('./routes/helpers/media-converter');
app.use('/api/helpers/converter', mediaHelper);

let mongoose = require('mongoose');
let connectionString = "mongodb+srv://Mikeis:Qwerty1234@cluster0.bzti4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(
    connectionString,
    {useNewUrlParser: true, useUnifiedTopology: true},
    function(err){
        console.log("DB Error");
        console.log(err);
    }
);

module.exports = app;
