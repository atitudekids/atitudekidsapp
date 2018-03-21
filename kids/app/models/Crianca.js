'use strict'

module.exports = (sequelize, DataTypes) => {
    const Crianca = sequelize.define('crianca', {
        id_crianca: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        nome: {
            type: DataTypes.STRING,
            required: true
        },
        dt_nascimento: {
            type: DataTypes.DATE,
            allowNull: false
        },
        identificacao: {
            type: DataTypes.STRING
        },
        foto_crianca: {
            type: DataTypes.BLOB('long'),
            //allowNull: false
        },
        observacao: {
            type: DataTypes.STRING
        },
        validado: {
            type: DataTypes.ENUM,
            values: ['0', '1']
        }
    }, {
        paranoid: true,
        underscored: true,
        timestamps: false,
        freezeTableName: true
    })
    return Crianca;
};