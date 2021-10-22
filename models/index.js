const User = require('./User');
const Interest = require('./Interest');
const Activity = require('./Activity');
const UserInterest = require('./UserInterest');
const UserActivity = require('./UserActivity');
const Friends = require('./Friends');

User.belongsToMany(Interest, { through: UserInterest, as: "user_interests", foreignKey: "user_id", onDelete: "SET NULL"});

Interest.belongsToMany(User, { through: UserInterest, as: "interests_user", foreignKey: "interest_id", onDelete: "SET NULL"});

User.belongsToMany(Activity, { through: UserActivity, as: "user_activities", foreignKey: "user_id", onDelete: "SET NULL"});

Activity.belongsToMany(User, { through: UserActivity, as: "activitys_user", foreignKey: "activity_id", onDelete: "SET NULL"});

User.belongsToMany(User, { through: Friends, as: "user_friends", foreignKey: "friend_id", onDelete: "SET NULL"});

User.belongsToMany(User, { through: Friends, as: "friends", foreignKey: "user_id", onDelete: "SET NULL"});



module.exports = { User, Interest, Activity, UserActivity, Friends, UserInterest };