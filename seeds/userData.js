const { User } = require('../models');

const users = [
    {
        username: 'Aidan',
        email: 'test@test.com',
        password: 'pass123',
    },
];

const seedUser = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUser;