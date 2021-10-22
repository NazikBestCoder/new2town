const { Friends } = require('../models');

const FriendsData = [

  {
    user_id: 1,
    friend_id: 4,
  },

 
  {
    user_id: 2,
    friend_id: 3,
  },
 
  {
    user_id: 3,
    friend_id: 2,
  },
 
 
  {
    user_id: 4,
    friend_id: 1,
  },

];

const seedFriends = () => Friends.bulkCreate(FriendsData);

module.exports = seedFriends;