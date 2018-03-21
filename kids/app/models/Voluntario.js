'use strict'

module.exports = (sequelize, DataTypes) => {
  const Voluntario = sequelize.define('voluntario', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    identificacao: {
      type: DataTypes.STRING,
      required: true,
      unique: true
    },
    telefone: {
      type: DataTypes.INTEGER,
      required: true
    },
    nome: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true,
        unique: true
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
        type: DataTypes.STRING,
        references: {
            model: 'cidade',
            key: 'id_cidade'
        },
        allowNull: false
    },
    id_estado: {
        type: DataTypes.STRING,
        references: {
            model: 'estado',
            key: 'id_estado'
        },
        allowNull: false
    },
    id_pais: {
        type: DataTypes.STRING,
        references: {
            model: 'pais',
            key: 'id_pais'
        },
        allowNull: false
    },
    foto: {
        type: DataTypes.BLOB('long'),
        //allowNull: false
    },
    administrador: {
        type: DataTypes.ENUM,
        required: true,
        values: ['0', '1']
    },
    validado: {
        type: DataTypes.ENUM,
        required: true,
        values: ['0', '1']
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
  },
  {
    classMethods: {
        associate: (models) => {
            Voluntario.belongsTo(models.Pais, {
                foreignKey: 'fk_voluntario_pais'
            }),
            Voluntario.belongsTo(models.Estado, {
                foreignKey: 'fk_voluntario_estado'
            }),
            Voluntario.hasMany(models.Cidade, {
                foreignKey: 'fk_voluntario_cidade'
            })
        }
    }
  }
)
  return Voluntario;
};