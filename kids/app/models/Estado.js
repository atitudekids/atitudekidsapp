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
  },
  {
    classMethods: {
      associate: (models) => {
        //Estado está associado a um país
        Estado.belongsTo(models.Pais, {
          foreignKey: 'fk_pais'
        }),
        Estado.hasMany(models.Cidade, {
          foreignKey: 'fk_estado'
        }),
        Estado.hasMany(models.Voluntario, {
          foreignKey: 'fk_voluntario_estado'
        }),
        Estado.hasMany(models.Responsavel, {
          foreignKey: 'fk_responsavel_estado'
        })
      }
    }
  }
)
  return Estado;
};