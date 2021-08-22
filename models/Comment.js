const {DataTypes, Model} = require('sequelize');
const Message = require('./Message');
const sequelize = require('../config/connection');

class Comment extends Model {

}

Comment.init(
    {
        comment_id: {type: DataTypes.INTEGER, primaryKey: true, autoincrement: true,},
        content: {type: DataTypes.STRING, allowNull:false,},
        message_id: {type: DataTypes.INTEGER, allowNull:false, references: {model: Message, key: "message_id"}}
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'Comment',
    },
);

module.exports = Comment;