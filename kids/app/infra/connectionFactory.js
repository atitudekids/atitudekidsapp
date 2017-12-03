var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host : 'us-cdbr-iron-east-05.cleardb.net',
        user : process.env.HEROKU_MYSQL_USER,
        password : process.env.HEROKU_MYSQL_KEY,
        database : 'heroku_5c067339215c764'
    });
}

module.exports = function () {
    return createDBConnection;
}