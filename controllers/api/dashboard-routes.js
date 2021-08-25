const router = require('express').Router();
const {Message} = require('../../models/');
console.log(__filename);

router.get('/', async (req, res) => {
    const loggedIn = req.session.loggedIn;
    const userId = req.session.user_id;
    const dbMessageData = await Message.findAll({where: {user_id: userId}});

    const messages = dbMessageData.map((element) => {
        element.get({plain: true});
    })
    res.render('Dashboard', {messages,  session:req.session,});
})


router.get('/:user_id', async (req, res) => {
    console.log('Dashboard')
    const dbMessageData = await Message.findAll({
        include: {all: true, nested: true},
        where: {user_id: req.params.user_id},
    });

    const messages = dbMessageData.map((element, index, array) =>
        element.get({plain: true})
    );

    console.log("---> messages length:" + (messages.length));
    res.render('dashboard', {messages, session:req.session,});
});y5


module.exports = router;