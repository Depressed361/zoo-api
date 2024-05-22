module.exports = (sequelize, DataTypes) => 
{
    return service = sequelize.define('Service', 
    {
        service_id: 
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        description: 
        {
            type: DataTypes.STRING,
            allowNull: false
        },

        prix: 
        {
            type: DataTypes.FLOAT,
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