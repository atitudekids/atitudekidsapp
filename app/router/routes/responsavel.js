'use strict';

module.exports = (app, db) => {

  // CONSULTA todos responsaveis
  //funcionando 20/12
  app.get('/responsaveis', (req, res) => {
    db.responsavel.findAll()
      .then(responsaveis => {
        res.json(responsaveis);
      });
  });

  // CONSULTA responsavel por id
  //funcionando 20/12
  app.get('/responsavel/:id', (req, res) => {
    db.responsavel.find({
      where: { id_responsavel: req.params.id}
    })
      .then(responsavel => {
        res.json(responsavel);
      });
  });

  // CADASTRA responsavel
  //funcionando 20/12
  app.post('/responsavel', (req, res) => {
    db.responsavel.create({
      nome: req.body.nome,
      telefone: req.body.telefone,
      identificacao: req.body.identificacao,
      email: req.body.email,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      bairro: req.body.bairro,
      cep: req.body.cep,
      id_cidade: req.body.id_cidade,
      id_estado: req.body.id_estado,
      id_pais: req.body.id_pais,
      foto: req.body.foto,
      validado: 1,
      senha: 'teste'
    })
      .then(newResponsavel => {
        res.json(newResponsavel);
      })
  });

  //ALTERA responsavel por id
  app.patch('/responsavel/:id', (req, res) => {
    const updates = req.body.updates;
    db.responsavel.find({
      where: { id_responsavel: req.params.id }
    })
      .then(responsavel => {
        return responsavel.updateAttributes(updates)
      })
      .then(updatedResponsavel => {
        res.json(updatedResponsavel);
      });
  });

  // DELETA responsavel por id
  //funcionando 20/12
  app.delete('/responsavel/:id', (req, res) => {
    db.responsavel.destroy({
      where: { id_responsavel: req.params.id }
    })
      .then(deletedResponsavel => {
        res.json(deletedResponsavel);
      });
  });
};