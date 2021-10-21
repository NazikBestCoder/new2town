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
<<<<<<< HEAD
        friend_id: '1'  
    },
    {
        username: 'Molly',
        email: 'test3@test.com',
        password: 'pass123',
        friend_id: '1'
    },
    {
        username: 'Nazik',
        email: 'test4@test.com',
        password: 'pass123',
        friend_id: '2'
=======
    },
    {
        username: 'Nazik',
        email: 'test3@test.com',
        password: 'pass123',
    },
    {
        username: 'Molly',
        email: 'test4@test.com',
        password: 'pass123',
>>>>>>> bfb3a66fdb9d29c5d8af3648e04fed99778ea3bd
    },
];

const seedUser = () => User.bulkCreate(users, {individualHooks: true});

module.exports = seedUser;