const {User, Message, Comment} = require('../models');


module.exports = {

    getMessagesAll: async () => {

        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}});

        let dbMessages = dbMessagesData.map(message =>
            message.get({plain: true})
        );
        return dbMessages;
    }

};
