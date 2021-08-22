const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const Message = require('./Message');

class User extends Model {


}

User.init(
    {
        username:{type: DataTypes.String, primaryKey:true, notNull:true, references:{model: Message, key: 'id'}},
        first_name:{type: DataTypes.String, notNull:true},
        last_name:{type: DataTypes.String, notNull:true},
        password:{type: DataTypes.String, notNull:true},
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
