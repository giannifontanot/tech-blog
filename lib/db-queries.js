const {User, Message, Comment} = require('../models');


module.exports = {

    getMessagesAll: async () => {

        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}});
        console.log("---> dbMessagesData :" + JSON.stringify(dbMessagesData));

        let dbMessages = dbMessagesData.map(message =>
            message.get({plain: true})
        );
        console.log("--->  dbMessages  :" + JSON.stringify(dbMessages));
        console.log("---> dbMessages length:" + dbMessages.length);
        return dbMessages;
    }

};
