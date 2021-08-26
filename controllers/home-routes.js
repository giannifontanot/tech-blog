const router = require('express').Router();
const dbQueries = require('../utils/db-queries');
const {Message, Comment, User} = require('../models/');



router.get('/', async (req, res) => {
    try {
        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}});
        const  messages  = dbMessagesData.map(message => message.get({plain: true}));

        res.render('homepage', {messages, session:req.session});
    } catch
        (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;