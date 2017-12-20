'use strict'

module.exports = (sequelize, DataTypes) => {
  const Responsavel = sequelize.define('cor', {
    id_cor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      required: true
    },
    valor_cor: {
      type: DataTypes.STRING,
      required: true
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Cor;
};