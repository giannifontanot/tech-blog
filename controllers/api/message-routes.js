const Message = require("../../models/Message");
const Comment = require("../../models/Comment");
const router = require('express').Router();

router.get('/newMessage', (req, res) => {
    res.render('newMessage', {session: req.session});

});

router.get('/newComment/:id', async (req, res) => {

    res.render('newComment', {session: req.session, message_id: req.params.id});

});


router.post('/saveComment', async (req, res) => {
    console.log("---> res.session :" + JSON.stringify(req.session));
    const comment = await Comment.create({
        content: req.body.content,
        user_id: req.session.userId,
        message_id: req.body.message_id,
    });
    const dbMessagesData = await Message.findAll({include: {all: true, nested: true}},);
    const messages = dbMessagesData.map(message => message.get({plain: true}));
    res.render('homepage', {messages, session: req.session});
});

router.post('/saveMessage', async (req, res) => {
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

});

router.post('/getMessage', async (req, res) => {

    const dbMessageData = await Message.findByPk(req.body.message_id,);
    console.log("---> dbMessageData :" + JSON.stringify(dbMessageData));
    const message = {
        "id": dbMessageData.id,
        "title": dbMessageData.title,
        "content": dbMessageData.content,
        "user_id": dbMessageData.user_id,
        "UserId": dbMessageData.user_id
    }
    console.log("---> message :" + JSON.stringify(message));
    res.render('updateMessage', {message, session: req.session});

});

router.post('/updateMessage', async (req, res) => {
    console.log("---> updateMessage :");
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

});

module.exports = router;