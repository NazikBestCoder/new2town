const router = require('express').Router();

const userRoutes = require('./user-routes');
const activityRoutes = require('./activity-routes');
const interestRoutes = require('./interest-routes');

router.use('/users', userRoutes);
router.use('/activity', activityRoutes);
router.use('/interest', interestRoutes);

module.exports = router;