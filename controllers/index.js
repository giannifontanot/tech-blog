const router = require('express').Router();
const home_routes = require('./home-routes');
const dashboard_routes = require('./api/dashboard-routes');
const message_routes = require('./api/message-routes');
const user_routes = require('./api/user-routes');


router.use('/', home_routes);
router.use('/dashboard', dashboard_routes);
router.use('/message', message_routes);
router.use('/user', user_routes);

console.log(__filename);



module.exports = router;

