const router = require('express').Router();
const dbQueries = require('../lib/db-queries');
const {Message, Comment, User} = require('../models/');
console.log(__filename);


router.get('/', async (req, res) => {
    try {
        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}});
        const messages = dbMessagesData.map(message => message.get({plain: true}));
        res.render('homepage', {messages});
    } catch
        (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;