'use strict';

module.exports = (app, db) => {

  // CONSULTA todos voluntarios
  //
  app.get('/voluntarios', (req, res) => {
    db.voluntario.findAll()
      .then(voluntarios => {
        res.json(voluntarios);
      });
  });

  // CONSULTA voluntario por id
  //
  app.get('/voluntario/:id', (req, res) => {
    db.voluntario.find({
      where: { id: req.params.id}
    })
      .then(voluntario => {
        res.json(voluntario);
      });
  });

  // CADASTRA voluntario
  //
  app.post('/voluntario', (req, res) => {
    db.voluntario.create({
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
      administrador: req.body.administrador,
      validado: req.body.validado,
      senha: req.body.senha
    })
      .then(newVoluntario => {
        res.json(newVoluntario);
      })
  });

  //ALTERA voluntario por id
  //
  app.patch('/voluntario/:id', (req, res) => {
    const updates = req.body.updates;
    db.voluntario.find({
      where: { id: req.params.id }
    })
      .then(voluntario => {
        return voluntario.updateAttributes(updates)
      })
      .then(updatedVoluntario => {
        res.json(updatedVoluntario);
      });
  });

  // DELETA voluntario por id
  //
  app.delete('/voluntario/:id', (req, res) => {
    db.voluntario.destroy({
      where: { id: req.params.id }
    })
      .then(deletedVoluntario => {
        res.json(deletedVoluntario);
      });
  });
};