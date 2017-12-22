'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  operatorsAliases,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    underscored: true
  }
});

// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.responsavel = require('../models/Responsavel.js')(sequelize, Sequelize);
db.crianca = require('../models/Crianca.js')(sequelize, Sequelize);
db.crianca_responsavel = require('../models/Crianca_responsavel.js')(sequelize, Sequelize);
db.voluntario = require('../models/Voluntario.js')(sequelize, Sequelize);
db.culto = require('../models/Culto.js')(sequelize, Sequelize);
db.escala_voluntario = require('../models/Escala_voluntario.js')(sequelize, Sequelize);
db.culto_crianca = require('../models/Culto_crianca.js')(sequelize, Sequelize);
db.sala = require('../models/Sala.js')(sequelize, Sequelize);
db.cor = require('../models/Cor.js')(sequelize, Sequelize);
db.cidade = require('../models/Cidade.js')(sequelize, Sequelize);
db.pais = require('../models/Pais.js')(sequelize, Sequelize);
db.estado = require('../models/Estado.js')(sequelize, Sequelize);

//Relations
// db.crianca.belongsToMany(db.responsavel, {
//   through: db.crianca_responsavel
// });
// db.responsavel.belongsToMany(db.crianca, {
//   through: db.crianca_responsavel
// });

db.sala.hasOne(db.cor);
db.cor.belongsTo(db.sala);

module.exports = db;