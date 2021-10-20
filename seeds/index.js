const sequelize = require('../config/connection');
const seedUser = require('./userData')
const seedInterest = require('./interestData');
const seedActivities = require('./activityData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedInterest();
    await seedActivities();
    process.exit(0); 
};



seedAll();