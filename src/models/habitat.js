module.exports = (sequelize, DataTypes) => {
     return sequelize.define('Habitat', {
        habitat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        description: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },

        commentaire_habitat: 
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

    

}