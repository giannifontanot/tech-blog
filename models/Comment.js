const {DataTypes, Model} = require('sequelize');
const Message = require('./Message');
const User = require('./User');
const sequelize = require('../config/connection');

class Comment extends Model {

}

Comment.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true,  allowNull: false, autoIncrement: true,},
        content: {type: DataTypes.STRING, allowNull: false,},
        //message_id: {type: DataTypes.INTEGER, allowNull: false},
        //user_id: {type: DataTypes.INTEGER, allowNull: false}

        // message_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: sequelize.models.Message, key: "message_id"}},
        // user_id: {type: DataTypes.INTEGER, allowNull: false, references: {model: sequelize.models.User, key: "user_id"}}

    },
    {
        sequelize,
        modelName: 'Comment',
        freezeTableName: true,
        underscored: true,
        timestamps: true,
    },
);

module.exports = Comment;