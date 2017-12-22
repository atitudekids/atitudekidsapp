'use strict';

module.exports = (app, db) => {
  
  // GET all criancas
  //funcionando 20/12
  app.get('/criancas', (req, res) => {
    db.crianca.findAll()
      .then(criancas => {
        res.json(criancas);
      });
  });

  // GET one crianca by id
  //funcionando 20/12 
  app.get('/crianca/:id', (req, res) => {
    db.crianca.find({
      where: { id_crianca: req.params.id}
    })
      .then(crianca => {
        res.json(crianca);
      });
  });

  // POST single crianca
  app.post('/crianca', (req, res) => {
    console.log('Cadastro da criança: ', req.body);
    db.crianca.create({
      nome: req.body.nome,
      dt_nascimento: req.body.dt_nascimento,
      identificacao: req.body.identificacao,
      foto_crianca: req.body.foto_crianca,
      observacao: req.body.observacao,
      validado: req.body.validado
    })
      .then(newCrianca => {
        res.json(newCrianca);
      });
  }); 

  // PATCH single crianca
  app.patch('/crianca/:id', (req, res) => {
    const updates = req.body.updates;
    db.crianca.find({
      where: { id_crianca: req.params.id }
    })
      .then(crianca => {
        return crianca.updateAttributes(updates);
      })
      .then(updatedCrianca => {
        res.json(updatedCrianca);
      });
  });

  //deleta uma criança pelo id
  //funcionando 20/12
  app.delete('/crianca/:id', (req, res) => {
    db.crianca.destroy({
      where: { id_crianca: req.params.id }
    })
      .then(deletedCrianca => {
        res.json(deletedCrianca);
      });
  });

};