var app = require('./config/express')(); //biblioteca para facilitar requisições

//método listen levanta o servidor
app.listen(3000, function(){
    console.log("Servidor rodando");
});