const { app } = require('../../app');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('animal', {
        animal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        etat: 
        {
            type: DataTypes.STRING,
            allowNull: false
        }, 

        habitat_id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false
        },


        espece: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },


        image_animal:
        {
            type: DataTypes.STRING,
            allowNull: false
        },

    
    },
        {

        timestamps: false,
        createdAt: 'created',
        updatedAt: false

    } 
    );

    
  animal.associate = function(models) {
    animal.belongsTo(models.Habitat, {
      foreignKey: 'habitat_id',
      as: 'habitat'
    });
  };

   return Animal;

};//ici les points d'entrée de l'application
//require('./src/models/routes/routes-animal')(app);

