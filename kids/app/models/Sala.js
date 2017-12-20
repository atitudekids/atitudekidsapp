'use strict'

module.exports = (sequelize, DataTypes) => {
  const Sala = sequelize.define('sala', {
    id_sala: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome_sala: {
      type: DataTypes.STRING,
      required: true
    },
    idade_permitida: {
        type: DataTypes.INTEGER,
        required: true
    },
    id_cor:{
        type: DataTypes.INTEGER,
        references: {
            model: 'cor',
            key: 'id_cor'
        },
        allowNull: false
    }
  }, {
    paranoid: true,
    underscored: true,
    timestamps: false,
    freezeTableName: true
  });
  return Sala;
};