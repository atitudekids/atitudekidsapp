var app = require('./config/express')(); //biblioteca para facilitar requisições
var http = require('http').Server(app);

var porta = process.env.PORT || 3000;
var server = http.listen(porta, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Servidor rodando na http://%s:%s', host, port);

});