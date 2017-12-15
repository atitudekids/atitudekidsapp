'use strict';

const express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    db = require('./app/config/db'),
    env = require('./app/config/env'),
    router = require('./app/router/index');

const app = express();
const port = env.PORT;

app.use(morgan('combined'));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

//drop and resync with { force: true }
// db.sequelize.sync(false).then(() => {
  app.listen(port, () => {
    console.log('Express listening on port:', port);
  // });
});