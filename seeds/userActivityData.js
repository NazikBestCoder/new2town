const { UserActivity } = require('../models');

const UserActivityData = [
  {
    user_id: 1,
    activity_id: 1,
  },
  {
    user_id: 1,
    activity_id: 2,
  },
  {
    user_id: 1,
    activity_id: 3,
  },
  {
    user_id: 2,
    activity_id: 1,
  },
  {
    user_id: 2,
    activity_id: 2,
  },
  {
    user_id: 2,
    activity_id: 4,
  },
  {
    user_id: 3,
    activity_id: 2,
  },
  {
    user_id: 3,
    activity_id: 3,
  },
  {
    user_id: 3,
    activity_id: 1,
  },
  {
    user_id: 4,
    activity_id: 2,
  },
  {
    user_id: 4,
    activity_id: 1,
  },
  {
    user_id: 4,
    activity_id: 4,
  },
];

const seedUserActivity = () => UserActivity.bulkCreate(UserActivityData);
// const seedUserActivity = () => console.log(UserActivity);

module.exports = seedUserActivity;