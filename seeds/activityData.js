const { Activity } = require('../models');

const activities = [
    {
        name: 'Stuff your Face!',
    },
    {
        name: 'Get Shwasted!'
    },
    {
        name: 'Walk around Trees!'
    },
    {
        name: 'Get Competitive!'
    },
];

const seedActivities = () => Activity.bulkCreate(activities);

module.exports = seedActivities;