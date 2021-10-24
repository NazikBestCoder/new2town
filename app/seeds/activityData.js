const { Activity } = require('../models');

const activities = [
    {
        id: 1,
        name: 'Stuff your Face!',
    },
    {
        id: 2,
        name: 'Get Shwasted!'
    },
    {
        id: 3,
        name: 'Walk around Trees!'
    },
    {
        id: 4,
        name: 'Get Competitive!'
    },
];

const seedActivities = () => Activity.bulkCreate(activities);

module.exports = seedActivities;