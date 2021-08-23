const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {


}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        username: {type: DataTypes.STRING, allowNull: false, unique: true},
        first_name: {type: DataTypes.STRING, allowNull: false},
        last_name: {type: DataTypes.STRING, allowNull: false},
        password: {type: DataTypes.STRING, allowNull: false},
    },
    {
        sequelize,
        modelName: 'User',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
    },
);

module.exports = User;
