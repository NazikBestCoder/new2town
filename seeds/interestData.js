const { Interest } = require('../models');

const interests = [
    {
        name: 'movies',
        detail: "I'm a big fan of film.",
    }
];

const seedInterest = () => Interest.bulkCreate(interests);

module.exports = seedInterest;