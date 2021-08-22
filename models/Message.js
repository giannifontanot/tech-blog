const {DataTypes, Model} = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User');
const Comment = require('./Comment');

class Message extends Model {
}

Message.init(
    {
        message_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            notNull: true,
            autoincrement: true,
            //references: {model: Comment, key: 'message_id'}
        },
        content: {type: DataTypes.STRING},
        username: {type: DataTypes.STRING, allowNull:false, references: {model: User, key: 'user_id'}},
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'Message',
        timestamps: false,
        underscored: true,
    }
);

module.exports = Message;