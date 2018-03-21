'use strict'

module.exports = (sequelize, DataTypes) => {
  const Cor = sequelize.define('cor', {
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
  },
  {
    classMethods: {
      associate: (models) => {
        Cor.hasMany(models.Sala, {
          foreignKey: 'fk_cor'
        })
      }
    }
  }
)
  return Cor;
};