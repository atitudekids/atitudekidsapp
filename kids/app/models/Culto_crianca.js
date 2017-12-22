'use strict'

module.exports = (sequelize, DataTypes) => {
    const Culto_crianca = sequelize.define('culto_crianca', {
        id_culto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'culto',
                key: 'id_culto'
            },
            allowNull: false
        },
        id_crianca: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'crianca',
                key: 'id_crianca'
            },
            allowNull: false
        },
        entrada: {
            type: DataTypes.DATE
        },
        saida: {
            type: DataTypes.DATE
        }
    }, {
            paranoid: true,
            underscored: true,
            timestamps: false
        }, {
            classMethods: {
                associate: (models) => {
                    Culto_crianca.belongsToMany(models.Culto, {
                        foreignKey: 'fk_idculto_crianca'
                    }),
                    Culto_crianca.belongsToMany(models.Crianca, {
                        foreignKey: 'fk_idcrianca_culto'
                    })
                }
            }
        }
    )
    return Culto_crianca;
};