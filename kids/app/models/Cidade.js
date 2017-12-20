'use strict'

module.exports = (sequelize, DataTypes) => {
  const Cidade = sequelize.define('cidade', {
    id_cidade: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
      type: DataTypes.STRING,
      required: true
    },
    id_estado: {
        type: DataTypes.INTEGER,
        references: {
            model: 'estado',
            key: 'id_estado'
        },
        allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Cidade;
};