const router = require('express').Router();
const {Message} = require('../../models/');

router.get('/', async (req, res) => {
    try {


        const loggedIn = req.session.loggedIn;
        const userId = req.session.user_id;
        const dbMessageData = await Message.findAll({where: {user_id: userId}});

        const messages = dbMessageData.map((element) => {
            element.get({plain: true});
        })
        res.render('Dashboard', {messages, session: req.session,});
    } catch (e) {
        console.error(e.message);
    }
})

// By just clicking the link once we are logged in
router.get('/:user_id', async (req, res) => {
    try {
        const dbMessageData = await Message.findAll({
            include: {all: true, nested: true},
            where: {user_id: req.params.user_id},
        });

        const messages = dbMessageData.map((element) => element.get({plain: true}));

        res.render('dashboard', {messages, session: req.session,});
    } catch (e) {
        console.error(e.message);
    }
});


module.exports = router;