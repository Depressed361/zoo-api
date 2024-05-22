module.exports = (sequelize, DataTypes) => {
   return sequelize.define('Image', {
        image_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        image_data: 
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


    return image;
}
