/**
 * Routes to be used in dashboard screen
 * @type {Router}
 */
const router = require('express').Router();
const {Message} = require('../../models/');

/**
 * Dashboard screen
 */
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
        console.error(" ++++ " + __filename + " " + e.message);
    }
})

/**
 * Find all messages from a certain user to show in Dashboard
 */
router.get('/:user_id', async (req, res) => {
    try {
        const dbMessageData = await Message.findAll({
            include: {all: true, nested: true},
            where: {user_id: req.params.user_id},
        });

        const messages = dbMessageData.map((element) => element.get({plain: true}));

        res.render('dashboard', {messages, session: req.session,});
    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});


module.exports = router;