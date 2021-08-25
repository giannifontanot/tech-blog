const Message = require("../../models/Message");
const router = require('express').Router();
console.log(__filename);

router.get('/newMessage', (req, res) => {
    res.render('newMessage', {session: req.session});

});

router.post('/saveMessage', async (req, res) => {
    const message = await Message.create({title: req.body.title, content: req.body.content, user_id: req.session.userId});
    const dbMessagesData = await Message.findAll({where: {user_id: req.session.userId}});
    const messages = dbMessagesData.map(message=>message.get({plain:true}));
    res.render('dashboard', {messages, session: req.session});

});

module.exports = router;