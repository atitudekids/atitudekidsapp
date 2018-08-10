'use strict';

const env = {
  PORT: process.env.PORT || 3000,
  //DATABASE_URL: process.env.DATABASE_URL || 'jdbc:mysql//us-cdbr-iron-east-05.cleardb.net:3306/HEROKU_MYSQL',
  DATABASE_NAME: process.env.DATABASE_NAME || 'heroku_5c067339215c764',
  DATABASE_HOST: process.env.DATABASE_HOST || 'us-cdbr-iron-east-05.cleardb.net',
  DATABASE_USERNAME: process.env.DATABASE_USERNAME || process.env.HEROKU_MYSQL_USER,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || process.env.HEROKU_MYSQL_KEY,
  DATABASE_PORT: process.env.DATABASE_PORT || 3306,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'mysql',

  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = env;