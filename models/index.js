const User = require('./User');
const Interest = require('./Interest');
const Activity = require('./Activity');
const UserInterest = require('./UserInterest');
const UserActivity = require('./UserActivity');

User.belongsToMany(Interest, { through: UserInterest, as: "user-interests", foreignKey: "user_id"});

Interest.belongsToMany(User, { through: UserInterest, as: "interests-user", foreignKey: "interest_id"});

User.belongsToMany(Activity, { through: UserActivity, as: "user-activities", foreignKey: "user_id"});

Activity.belongsToMany(User, { through: UserActivity, as: "activitys-user", foreignKey: "activity_id"});


module.exports = { User, Interest, Activity };