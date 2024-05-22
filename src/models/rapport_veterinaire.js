const animal = require("./animal").default;

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Rapport_veterinaire', {
        rapport_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        detail: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        animal_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        createdAt: 'created',
        updatedAt: false
    });

    return rapport_veterinaire;
}