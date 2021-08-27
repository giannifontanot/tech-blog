const router = require('express').Router();
const dbQueries = require('../../utils/db-queries');
const {User, Message, Comment} = require('../../models');

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    req.session.destroy(async () => {
        const dbMessageData = await Message.findAll({include: {all: true, nested: true},});
        const messages = dbMessageData.map((element) => element.get({plain: true}));
        res.render('homepage', {messages, session: req.session,});
    });
});

router.post('/verify', async (req, res) => {

    try {

        const user = await User.findOne({where: {username: req.body.username}});

        if (user !== null && (user.password === req.body.password)) {


            await req.session.save(() => {
                req.session.loggedIn = true;
                req.session.userId = user.id;
                req.session.username = user.username;

            });
            const dbMessagesData = await Message.findAll({where: {user_id: user.id}});
            const messages = dbMessagesData.map(messages => messages.get({plain: true}));
            res.render('dashboard', {
                messages, session: req.session,
            },);
        } else {
            res.render('error');
        }

    } catch (e) {
        console.error(e.message);
    }
});

router.get('/newUser', (req, res) => {
    res.render('newUser');
});

router.post('/saveUser', async (req, res) => {
    const newUser = await User.create({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: req.body.password
    });
    res.render('login', {session: req.session,},)
});


router.get('/checkUsername/:username', async (req, res) => {
    try {
        const user = await User.findOne({where: {username: req.params.username}});
        if (user ===  null ) {
            res.json({status: "continue"});
        } else {
            res.json({status: "existent"});
        }
    } catch (e) {
        console.error(e.message);
    }


});

module.exports = router;


























