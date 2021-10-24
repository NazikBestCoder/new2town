const { UserInterest } = require('../../models');

const UserInterestData = [
  {
    user_id: 1,
    interest_id: 1,
  },
  {
    user_id: 1,
    interest_id: 2,
  },
  {
    user_id: 1,
    interest_id: 3,
  },
  {
    user_id: 2,
    interest_id: 1,
  },
  {
    user_id: 2,
    interest_id: 2,
  },
  {
    user_id: 2,
    interest_id: 4,
  },
  {
    user_id: 3,
    interest_id: 2,
  },
  {
    user_id: 3,
    interest_id: 3,
  },
  {
    user_id: 3,
    interest_id: 1,
  },
  {
    user_id: 4,
    interest_id: 2,
  },
  {
    user_id: 4,
    interest_id: 1,
  },
  {
    user_id: 4,
    interest_id: 4,
  },
];

const seedUserInterest = () => UserInterest.bulkCreate(UserInterestData);

module.exports = seedUserInterest;