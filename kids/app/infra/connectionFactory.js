var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'abc',
        database : 'ibakids'
    });
}

module.exports = function () {
    return createDBConnection;
}