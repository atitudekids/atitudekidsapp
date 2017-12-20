'use strict'

module.exports = (sequelize, DataTypes) => {
  const Pais = sequelize.define('pais', {
    id_pais: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      required: true
    },
    sigla: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Pais;
};