const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const sessions = require("client-sessions");

const routes = require('./routes/index');
const api = require('./routes/api');
const account = require("./routes/account");

const databaseUrl = 'mongodb://localhost/developers';
mongoose.connect(databaseUrl, function(error, response){
  if (error){
    console.log('Connection to database was unsuccessful: '+ error)
  }
  else{
    console.log('DB CONNECTION SUCCESS: '+ databaseUrl)
  }

});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Create a logging session for the user.
app.use(sessions({
  cookieName: "session",
    secret: "ajajfjwfajwej", //1 day session.
    duration: 20*60*60*1000,
    activeDuration: 30*60*1000
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', api);
app.use("/account", account);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
