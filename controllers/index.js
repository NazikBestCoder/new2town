const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');
const friendsListRoutes = require('./friends-list-routes');
const loginRoutes = require('./login-routes');
const profileRoutes = require('./profile-routes');
const signupRoutes = require('./signup-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/friendslist', friendsListRoutes);
router.use('/login', loginRoutes);
router.use('/profile', profileRoutes);
router.use('/signup', signupRoutes);

module.exports = router;
