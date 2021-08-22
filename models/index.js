const User = require('./User');
const Message = require('./Message');
const Comment = require('./Comment');

User.hasMany(Message,{foreignKey:'username'});
Message.belongsTo(User);

Message.hasMany(Comment, {foreignKey:'id_message'});
Comment.belongsTo(Message);
