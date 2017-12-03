module.exports = function(app) {

    app.get('/salas', function(req, res) {
        var connection = app.infra.connectionFactory();
        var SalasDAO = new app.infra.SalasDAO(connection);

        SalasDAO.lista(function(err, results) {
            if(err){
                res.format({
                    json: function() {
                        res.status(500).json("FALHA INTERNA");
                    }
                });
                return;
            }else{
                res.json(results);
            }
            
        });

        connection.end();
    });
        
    app.post('/salas', function(req, res){
        var connection = app.infra.connectionFactory();
        var SalasDAO = new app.infra.SalasDAO(connection);

        var salas = req.body;

        req.assert('nome_sala','O nome da sala deve ser inserido').notEmpty();
        
        var errors = req.validationErrors();
        if (errors){
            res.format({
                json: function() {
                    res.status(400).send(erros);
                }
            });
            return;
        }

        SalasDAO.salva(salas,function(exception, result){
            if (!exception) {
                res.redirect("/salas");
            }
        }); 
        
        connection.end();

    });
}