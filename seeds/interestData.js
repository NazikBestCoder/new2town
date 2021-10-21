const { Interest } = require('../models');

const interests = [
    {
        name: 'movies',
        detail: "I'm a big fan of film.",
    },
    {
        name: 'politics',
        detail: "Love to argue.",
    },
    {
        name: 'fashion',
        detail: "I'm an icon.",
    },
    {
        name: 'cooking',
        detail: "I'm lowkey a 5-star chef.",
    },
];

const seedInterest = () => Interest.bulkCreate(interests);

module.exports = seedInterest;