'use strict'

module.exports = (sequelize, DataTypes) => {
    const Crianca_responsavel = sequelize.define('crianca_responsavel', {
        id_crianca: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'crianca',
                key: 'id_crianca'
            },
            allowNull: false
        },
        id_responsavel: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: 'responsavel',
                key: 'id_responsavel'
            },
            allowNull: false
        }
    }, {
        paranoid: true,
        underscored: true,
        timestamps: false
    });
    return Crianca_responsavel;
};