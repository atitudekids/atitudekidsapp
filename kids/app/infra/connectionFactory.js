var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host : 'us-cdbr-iron-east-05.cleardb.net',
        user : process.env.HEROKU_MYSQL_USER,
        password : process.env.HEROKU_MYSQL_KEY,
        database : 'ibakids'
    });
}

module.exports = function () {
    return createDBConnection;
}