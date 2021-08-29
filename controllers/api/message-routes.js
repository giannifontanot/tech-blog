/**
 * Routes to manage messages
 * @type {Message}
 */
const Message = require("../../models/Message");
const Comment = require("../../models/Comment");
const router = require('express').Router();

/**
 * Show new message screen
 */
router.get('/newMessage', (req, res) => {
    try {
        res.render('newMessage', {session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Show comments of a certain message
 */
router.get('/newComment/:id', async (req, res) => {
    try {
        const dbMessageData = await Message.findByPk(req.params.id);
        const message = {
            "id": dbMessageData.id,
            "title": dbMessageData.title,
            "content": dbMessageData.content,
            "user_id": dbMessageData.user_id,
            "UserId": dbMessageData.user_id
        }

        res.render('newComment', {message, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});


/**
 * Save a comment
 */
router.post('/saveComment', async (req, res) => {
    try {
        const comment = await Comment.create({
            content: req.body.content,
            user_id: req.session.userId,
            message_id: req.body.message_id,
        });
        const dbMessagesData = await Message.findAll({include: {all: true, nested: true}},);
        const messages = dbMessagesData.map(message => message.get({plain: true}));
        res.render('homepage', {messages, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Save a message
 */
router.post('/saveMessage', async (req, res) => {
    try {
        const message = await Message.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.userId
        });

        // By saving one message and redirecting to dashboard
        const dbMessagesData = await Message.findAll({
            // include: {all: true, nested: true},
            where: {user_id: req.session.userId}
        });

        const messages = dbMessagesData.map(message => message.get({plain: true}));
        res.render('dashboard', {messages, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Show on screen a certain message
 */
router.post('/getMessage', async (req, res) => {
    try {
        const dbMessageData = await Message.findByPk(req.body.message_id,);
        const message = {
            "id": dbMessageData.id,
            "title": dbMessageData.title,
            "content": dbMessageData.content,
            "user_id": dbMessageData.user_id,
            "UserId": dbMessageData.user_id
        }
        res.render('updateMessage', {message, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});


/**
 * Delete a message
 */
router.get('/deleteMessage/:id', async (req, res) => {
    try {
        const result = await Message.destroy({where: {id: req.params.id}});
        // By saving one message and redirecting to dashboard
        const dbMessagesData = await Message.findAll({
            // include: {all: true, nested: true},
            where: {user_id: req.session.userId}
        });

        const messages = dbMessagesData.map(message => message.get({plain: true}));
        res.render('dashboard', {messages, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Update a message
 */
router.post('/updateMessage', async (req, res) => {
    try {
        const message = await Message.update(
            {
                title: req.body.title,
                content: req.body.content,
            },
            {where: {id: req.body.message_id}}
        );

        // By saving one message and redirecting to dashboard
        const dbMessagesData = await Message.findAll({
            // include: {all: true, nested: true},
            where: {user_id: req.session.userId}
        });

        const messages = dbMessagesData.map(message => message.get({plain: true}));
        res.render('dashboard', {messages, session: req.session});

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

module.exports = router;