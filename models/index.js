const User = require('./User');
const Message = require('./Message');
const Comment = require('./Comment');


Message.belongsTo(User, {foreignKey:'user_id', onDelete:'CASCADE'});

Message.hasMany(Comment, {foreignKey:'message_id', onDelete:'CASCADE'});
Comment.belongsTo(User, {foreignKey:'user_id', onDelete:'CASCADE'});









// User.hasMany(Message,{foreignKey:'user_id', onDelete:'CASCADE'});
// Message.belongsTo(User, {foreignKey:'user_id', onDelete:'CASCADE'});
//
// Message.hasMany(Comment, {foreignKey:'message_id', onDelete:'CASCADE'});
// Comment.belongsTo(Message, {foreignKey:'message_id', onDelete:'CASCADE'});
//
// User.hasMany(Comment,{foreignKey:'user_id', onDelete:'CASCADE'});
// Comment.belongsTo(User,{foreignKey:'user_id', onDelete:'CASCADE'});

module.exports = {User, Message, Comment}