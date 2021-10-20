const User = require('./User');
const Interest = require('./Interest');
const Activity = require('./Activity');

User.hasMany(Interest, {
    foreignKey: 'user_int_id'
})

User.hasMany(Activity, {
    foreignKey: 'user_id'
})



module.exports = { User, Interest, Activity };