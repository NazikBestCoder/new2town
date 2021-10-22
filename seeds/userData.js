const { User } = require('../models');

const users = [
    {
        username: 'Aidan',
        email: 'test@test.com',
        password: 'pass123',
    },
    {
        username: 'Joey',
        email: 'test2@test.com',
        password: 'pass123',
    },
    {
        username: 'Molly',
        email: 'test3@test.com',
        password: 'pass123',
    },
    {
        username: 'Nazik',
        email: 'test4@test.com',
        password: 'pass123',
    },
];

const seedUser = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUser;