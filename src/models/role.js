module.exports = (sequelize, DataTypes) => {

    return sequelize.define('Role', {
        role_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        label: {
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
    return role;
}