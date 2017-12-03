module.exports = function(app) {
    
    app.get('/criancas', function(req, res) {
        var connection = app.infra.connectionFactory();
        var CriancasDAO = new app.infra.CriancasDAO(connection);
    
        CriancasDAO.lista(function(err, results) {
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
            
        app.post('/criancas', function(req, res){
            var connection = app.infra.connectionFactory();
            var CriancasDAO = new app.infra.CriancasDAO(connection);
    
            var criancas = req.body;
    
            req.assert('nome','O nome da criança deve ser inserido').notEmpty();
            
            var errors = req.validationErrors();
            if (errors){
                res.format({
                    json: function() {
                        res.status(400).send(erros);
                    }
                });
                return;
            }
    
            CriancasDAO.salva(criancas,function(exception, result){
                if (!exception) {
                    res.redirect("/criancas");
                }
            }); 
            
            connection.end();
    
        });
    }