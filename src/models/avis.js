module.exports= (sequelize, DataTypes) => {
     return sequelize.define('Avis', {
        avis_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pseudo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentaire: 
        {
            type: DataTypes.STRING,
            allowNull: false
        }, 

        isVisble :
        {
            type: DataTypes.BOOLEAN,
            allowNull: false 
        }


    },
        {

        timestamps: false,
        createdAt: 'created',
        updatedAt: false

    } 
    );

    

}