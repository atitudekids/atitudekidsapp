'use strict'

module.exports = (sequelize, DataTypes) => {
  const Responsaveis = sequelize.define('responsaveis', {
    id_responsavel: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    identificacao: {
      type: DataTypes.STRING,
      required: true
    },
    telefone: {
      type: DataTypes.DATE,
      required: true
    },
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    rua: {
        type: DataTypes.STRING
    },
    numero: {
        type: DataTypes.INTEGER
    },
    complemento: {
        type: DataTypes.STRING
    },
    bairro: {
        type: DataTypes.STRING
    },
    cep: {
        type: DataTypes.STRING
    },
    id_cidade: {
        type: DataTypes.STRING
    },
    id_estado: {
        type: DataTypes.STRING
    },
    id_pais: {
        type: DataTypes.STRING
    },
    foto: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    },
    validado: {
        type: DataTypes.STRING,
        required: true,
        values: ['s', 'n']
    },
    senha: {
        type: DataTypes.STRING,
        required: true
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Responsaveis;
};