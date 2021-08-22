const {DataTypes, Model} = require('sequelize');
const Message = require('./Message');
const sequelize = require('../config/connection');

class Comment extends Model{

}

Comment.init(
    {
        id:{type: DataTypes.Number,primaryKey:true,autoincrement:true,references:{model:Message,key:'id'}},
        content: {type: DataTypes.String, notNull: true,}
    },
    {
        sequelize,
        freezeTableName: true,
        underscore: true,
        modelName: 'Comment',
    },
);

module.exports = Comment;