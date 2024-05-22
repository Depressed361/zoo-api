module.exports = (sequelize, DataTypes) => {
   return sequelize.define('Utilisateur', {
        utilisateur_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: 
        {
            type: DataTypes.STRING,
            allowNull: false
        }, 

       password:{
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