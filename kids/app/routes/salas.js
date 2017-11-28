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

        var salas = req.body;

        var connection = app.infra.connectionFactory();
        var SalasDAO = new app.infra.SalasDAO(connection);

        req.assert('nome_sala','O nome da sala é obrigatório!').notEmpty();
        req.assert('idade_permit','A idade permitida na sala é obrigatória').notEmpty();
        //req.assert('data_culto','A data do próximo culto deve ser infomada').notEmpty();

        var erros = req.validationErrors();
        if (erros){
            res.format({
                json: function() {
                    res.status(500).json(erros);
                }
            });
            return;
        }
        
        SalasDAO.salva(salas,function(erros, resultados){
            res.redirect('/salas');
        });

        connection.end();

    });
}