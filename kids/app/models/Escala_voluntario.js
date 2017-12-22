'use strict'

module.exports = (sequelize, DataTypes) => {
    const Escala_voluntario = sequelize.define('escala_voluntario', {
        id_voluntario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'voluntario',
                key: 'id'
            },
            allowNull: false
        },
        id_culto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'culto',
                key: 'id_culto'
            },
            allowNull: false
        }
    }, {
            paranoid: true,
            underscored: true,
            timestamps: false
        }, {
            classMethods: {
                associate: (models) => {
                    Escala_voluntario.belongsToMany(models.Voluntario, {
                        foreignKey: 'fk_idvoluntario'
                    }),
                    Escala_voluntario.belongsToMany(models.Culto, {
                        foreignKey: 'fk_idculto'
                    })
                }
            }
        }
    )
    return Escala_voluntario;
};