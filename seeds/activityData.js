const { Activity } = require('../models');

const activities = [
    {
        name: 'Stuff your Face!',
    },
    {
        name: 'Get Shwasted!'
    },
];

const seedActivities = () => Activity.bulkCreate(activities);

module.exports = seedActivities;