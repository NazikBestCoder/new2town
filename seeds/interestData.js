const { Interest } = require('../models');

const interests = [
    {
        interest_name: 'movies',
        interest_detail: 'I like indie movies best.',
    }
]

const seedInterest = () => Interest.bulkCreate(interests);

module.exports = seedInterest;