const sequelize = require('../config/connection');
const {User, Message, Comment} = require('../models/index');

const user_seeds = require('./user.json');
const message_seeds = require('./message.json');
const comment_seeds = require('./comment.json');


const seedAll = async () => {
    //const sequelizeResult = await sequelize.sync({force:true});
     const seedUserResult = await User.bulkCreate(user_seeds);
     const seedMessageResult = await Message.bulkCreate(message_seeds);
     const seedCommentResult = await Comment.bulkCreate(comment_seeds);
    // process.exit(0);
}

// Seed the database
module.exports = {seedAll};
