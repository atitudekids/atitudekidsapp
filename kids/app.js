'use strict';

const express = require('express'),
    passport = require('passport'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    morgan = require('morgan'),
    db = require('./app/config/db'),
    env = require('./app/config/env'),
    router = require('./app/router/index'),
    flash = require('connect-flash'),
    exphbs = require('express-handlebars');

const app = express();
const port = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
  res.send('WELCOME!');
});

//drop and resync with { force: true }
// db.sequelize.sync(false).then(() => {
  app.listen(port, () => {
    console.log('Express listening on port:', port);
   });
//});