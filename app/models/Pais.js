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
    },
    {
      classMethods: {
        associate: (models) => {
          Pais.hasMany(models.Estado, {
            foreignKey: 'fk_pais'
          }),
          Pais.hasMany(models.Voluntario, {
            foreignKey: 'fk_voluntario_pais'
          }),
          Pais.hasMany(models.Responsavel, {
            foreignKey: 'fk_responsavel_pais'
          })
        }
      }
    }
  )
  return Pais;
};