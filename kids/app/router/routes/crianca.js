'use strict';

module.exports = (app, db) => {
  // GET all criancas
  app.get('/criancas', (req, res) => {
    db.crianca.findAll()
      .then(criancas => {
        res.json(criancas);
      });
  });

  // GET one crianca by id
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
    console.log('hihi', req.body)
    const nome = req.body.nome;
    const dataNascimentoCrianca = req.body.dt_nascimento;
    const identificacaoCrianca = req.body.identificacao;
    const fotoCrianca = req.body.foto_crianca;
    const observacao = req.body.observacao;
    const validaCrianca = req.body.validacao;
    db.crianca.create({
      nome: nome,
      dataNascimentoCrianca: dt_nascimento,
      identificacaoCrianca: identificacao,
      fotoCrianca: foto_crianca,
      observacao: observacao,
      validaCrianca: validacao
    })
      .then(newCrianca => {
        res.json(newCrianca);
      });
  }); 

  // PATCH single pet
  app.patch('/crianca/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body.updates;
    db.crianca.find({
      where: { id: id_crianca }
    })
      .then(crianca => {
        return crianca.updateAttributes(updates);
      })
      .then(updatedCrianca => {
        res.json(updatedCrianca);
      });
  });

  app.delete('/crianca/:id', (req, res) => {
    const id = req.params.id_crianca;
    db.crianca.destroy({
      where: { id: id_crianca }
    })
      .then(deletedCrianca => {
        res.json(deletedCrianca);
      });
  });

};