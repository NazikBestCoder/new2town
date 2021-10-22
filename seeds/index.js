const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedInterest = require('./interestData');
const seedActivities = require('./activityData');
const seedUserActivity = require('./userActivityData')
const seedUserInterest = require('./userInterestData')

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedUser();
    console.log('\n----- USER SEEDED-----\n');
    await seedInterest();
    console.log('\n----- INTEREST SEEDED-----\n');
    await seedActivities();
    console.log('\n----- ACTIVITIES SEEDED-----\n');
    await seedUserActivity();
    console.log('\n----- USER ACTIVITIES SEEDED-----\n');
    await seedUserInterest();
    console.log('\n----- USER INTERESTS SEEDED-----\n');
    process.exit(0); 
};



seedAll();