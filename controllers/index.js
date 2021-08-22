const router = require('express').Router();
const home_routes = require('./home-routes');
const message_routes = require('./api/message-routes');
const user_routes = require('./api/user-routes');
const comment_routes = require('./api/comment-routes');

router.use('/', home_routes);
router.use('/api/message', message_routes);
router.use('/api/comment', comment_routes);
router.use('/api/user', user_routes);




module.exports = router;
