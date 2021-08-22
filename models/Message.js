const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');

class Message extends Model {

}

Message.init(
    {
        id: {type: DataTypes.Number, primaryKey: true, notNull: true, autoincrement: true,references:{model: User, key:'username'}},
        content: {type: DataTypes.String}
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'Message',
        underscored: true,
        timestamps: false,
    }
);

module.exports = Message;