const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const Message = require('./Message');

class User extends Model {


}

User.init(
    {
        user_id:{type: DataTypes.INTEGER, primaryKey:true, notNull:true,},
        username:{type: DataTypes.STRING, allowNull:false, unique:true},
        first_name:{type: DataTypes.STRING, allowNull:false},
        last_name:{type: DataTypes.STRING, allowNull:false},
        password:{type: DataTypes.STRING, allowNull:false},
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'User',
        underscored: true,
        timestamps: false,
    },
);

module.exports = User;
