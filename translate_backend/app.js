let express = require('express');
let app = express();
let createError = require('http-errors');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// Cors
let cors = require('cors')
app.use(cors({origin: '*'}))

// File Loader
const multer  = require("multer");
app.use(multer({dest:"uploads"}).single("img"))

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Auth
let auth = require('./controllers/auth')
app.use(auth.middlewareAuth)
app.post ('/api/auth', auth.authByLogin)
app.post ('/api/tryCreateUser', auth.tryCreateUser)
app.post('/api/sendEmailVerification', auth.sendEmailVerification)
app.get('/api/auth/confirm/:email', auth.verifyUser)

// Translation
let translation = require('./controllers/translation')
app.post('/api/saveTranslation', translation.saveTranslation)

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// DataBase
let mongoose = require('mongoose')
let connectionString = "mongodb+srv://Mikeis:V3ZRZq5NNtuTqtQe@cluster0.2hqdt.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
    connectionString,
    { useNewUrlParser: true, useUnifiedTopology: true },
    function (err) {
      if(err) {
        console.log("DB Error")
        console.log(err)
      }
    }
)

module.exports = app;
