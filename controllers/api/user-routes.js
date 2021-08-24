const router = require('express').Router();
const dbQueries = require('../../lib/db-queries');
const {User, Message, Comment} = require('../../models');
console.log(__filename);


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        const messages = dbQueries.getMessagesAll();
        console.log("---> messages :" + JSON.stringify(messages));
        console.log("---> messages length:" + (messages.length));
        res.render('dashboard', {messages, loggedIn: false});
    });
});

router.post('/verify', async (req, res) => {

    try {

        const  user  = await User.findOne({where: {username: req.body.username}});
         console.log("---> user :" + JSON.stringify (user) );
        const   userValid   = await User.findOne({where: {password: req.body.password}});
         console.log("---> userValid :" + JSON.stringify (userValid) );

        await req.session.save(() => {
            req.session.loggedIn = true;

            const messages = {};
            res.render('dashboard', {messages, loggedIn: req.session.loggedIn},);
        });
    } catch (e) {
        console.error(e.message);
    }
});

router.get('/newUser', (req, res) => {
    res.render('newUser');
});

router.post('/saveUser', (req, res) => {
    res.render('dashboard');
});
module.exports = router;

