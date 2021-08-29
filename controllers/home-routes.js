/**
 * Code to handle homepage routes
 * @type {Router}
 */
const router = require('express').Router();
const {Message, Comment, User} = require('../models/');

/**
 * Show all messages on screen
 */
router.get('/', async (req, res) => {
    try {
        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}});
        const messages = dbMessagesData.map(message => message.get({plain: true}));

        res.render('homepage', {messages, session: req.session});
    } catch
        (e) {
        res.status(400).send(" ++++ " + __filename + " " + e.message);
    }
});

module.exports = router;