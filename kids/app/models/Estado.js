'use strict'

module.exports = (sequelize, DataTypes) => {
  const Estado = sequelize.define('estado', {
    id_estado: {
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
    },
    id_pais: {
        type: DataTypes.INTEGER,
        references: {
            model: 'pais',
            key: 'id_pais'
        },
        allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Estado;
};