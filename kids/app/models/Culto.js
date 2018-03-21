'use strict'

module.exports = (sequelize, DataTypes) => {
    const Culto = sequelize.define('culto', {
        id_culto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        id_sala: {
            type: DataTypes.INTEGER,
            references: {
                model: 'sala',
                key: 'id_sala'
            },
            allowNull: false
        },
        data_culto: {
            type: DataTypes.DATE,
            allowNull: false
        },
        turno: {
            type: DataTypes.ENUM,
            values: ['0', '1']
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
            Culto.belongsTo(models.Sala, {
                foreignKey: 'fk_cultosala'
            })
        }
      }
    }
)
    return Culto;
};