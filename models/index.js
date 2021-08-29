/**
 * Relationships between the models
 */
const Sequelize = require('sequelize');
const User = require('./User')
const Message = require('./Message')
const Comment = require('./Comment')


User.hasMany(Message, {foreignKey: {name: 'user_id', allowNull: false,}});
Message.belongsTo(User);

Message.hasMany(Comment, {foreignKey: {name: 'message_id', allowNull: false,}});
Comment.belongsTo(Message);

User.hasMany(Comment, {foreignKey: {name: 'user_id', allowNull: false,}});
Comment.belongsTo(User);

module.exports = {User, Message, Comment}