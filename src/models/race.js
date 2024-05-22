module.exports = (sequelize, DataTypes) => {
    return race = sequelize.define('race', {

        race_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: 
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