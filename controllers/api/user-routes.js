/**
 * Routes to manage users
 */
const router = require('express').Router();
const dbQueries = require('../../utils/db-queries');
const {User, Message, Comment} = require('../../models');

/**
 * Show the login screen
 */
router.get('/login', (req, res) => {
    try {

        res.render('login');
    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});


/**
 * Logout a user
 */
router.get('/logout', (req, res) => {

    try {
        req.session.destroy(async () => {
            const dbMessageData = await Message.findAll({include: {all: true, nested: true},});
            const messages = dbMessageData.map((element) => element.get({plain: true}));
            res.render('homepage', {messages, session: req.session,});
        });

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Setup a session for a user after verifying password
 *
 */
router.post('/verify', async (req, res) => {

    try {
        const username = req.body.username;
        const  usernameTrim  = username.trim();
         console.log("---> usernameTrim :>" +  (usernameTrim) +"<");

        const password = req.body.password;
        const  passwordTrim  = password.trim();
         console.log("---> passwordTrim :>" + (passwordTrim) +"<");

        const dbUserData = await User.findOne({where: {username: usernameTrim}});

        if (dbUserData !== null && (await dbUserData.checkPassword(passwordTrim))) {


            await req.session.save(() => {
                req.session.loggedIn = true;
                req.session.userId = dbUserData.id;
                req.session.username = dbUserData.username;

            });
            const dbMessagesData = await Message.findAll({where: {user_id: dbUserData.id}});
            const messages = dbMessagesData.map(messages => messages.get({plain: true}));
            res.render('dashboard', {
                messages, session: req.session,
            },);
        } else {
            res.render('error');
        }

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Show new user screen
 */
router.get('/newUser', (req, res) => {
    try {
        res.render('newUser');

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});

/**
 * Save new user data
 */
router.post('/saveUser', async (req, res) => {
    try {
        const newUser = await User.create({
            username: req.body.username.trim(),
            first_name: req.body.first_name.trim(),
            last_name: req.body.last_name.trim(),
            password: req.body.password.trim()
        });
        res.render('login', {session: req.session,},)

    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }
});


/**
 * Check the previous existence of a username
 */
router.get('/checkUsername/:username', async (req, res) => {
    try {
        const username = req.params.username;
        const usernameTrim = username.trim();
        const user = await User.findOne({where: {username: usernameTrim}});
        if (user === null) {
            res.json({status: "continue"});
        } else {
            res.json({status: "existent"});
        }
    } catch (e) {
        console.error(" ++++ " + __filename + " " + e.message);
    }

});

module.exports = router;


























