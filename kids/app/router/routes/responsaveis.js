'use strict';

module.exports = (app, db) => {

  // GET all owners
  app.get('/responsaveis', (req, res) => {
    db.responsaveis.findAll()
      .then(responsaveis => {
        res.json(responsaveis);
      });
  });

  // GET one owner by id
  app.get('/responsavel/:id', (req, res) => {
    const id = req.params.id_responsavel;
    db.responsaveis.find({
      where: { id: id_responsavel}
    })
      .then(responsavel => {
        res.json(responsavel);
      });
  });

  // POST single owner
  app.post('/responsavel', (req, res) => {
    const nomeResponsavel = req.body.nome;
    const telefoneResponsavel = req.body.telefone;
    const identificacaoResponsavel = req.body.identificacao;
    const emailResponsavel = req.body.email;
    const ruaResponsavel = req.body.rua;
    const numeroResponsavel = req.body.numero;
    const complementoResponsavel = req.body.complemento;
    const bairroResponsavel = req.body.bairro;
    const cepResponsavel = req.body.cep;
    const id_cidadeResponsavel = req.body.id_cidade;
    const id_estadoResponsavel = req.body.id_estado;
    const id_paisResponsavel = req.body.id_pais;
    const fotoResponsavel = req.body.foto;
    const validadoResponsavel = req.body.validado;
    const senhaResponsavel  = req.body.req.body.senha;
    db.responsaveis.create({
      nomeResponsavel: nome,
      telefoneResponsavel: telefone,
      identificacaoResponsavel: identificacao,
      emailResponsavel: email,
      ruaResponsavel: rua,
      numeroResponsavel: numero,
      complementoResponsavel: complemento,
      bairroResponsavel: bairro,
      cepResponsavel: cep,
      id_cidadeResponsavel: id_cidade,
      id_estadoResponsavel: id_estado,
      id_paisResponsavel: id_pais,
      fotoResponsavel: foto,
      validadoResponsavel: validado,
      senhaResponsavel: senha
    })
      .then(newResponsavel => {
        res.json(newResponsavel);
      })
  });

  // PATCH single owner
  app.patch('/responsavel/:id', (req, res) => {
    const id = req.params.id_responsavel;
    const updates = req.body.updates;
    db.responsaveis.find({
      where: { id: id_responsavel }
    })
      .then(responsavel => {
        return responsavel.updateAttributes(updates)
      })
      .then(updatedResponsavel => {
        res.json(updatedResponsavel);
      });
  });

  // DELETE single owner
  app.delete('/responsavel/:id', (req, res) => {
    const id = req.params.id_responsavel;
    db.responsaveis.destroy({
      where: { id: id_responsavel }
    })
      .then(deletedResponsavel => {
        res.json(deletedResponsavel);
      });
  });
};