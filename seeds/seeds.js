const sequelize = require('../config/connection');
const { Content, User } = require('../models');
const userData = require('./user.json');
const contentData = require('./content.json');

const seedData = async () => {
    await sequelize.sync({force: true});

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true
    });

    await Content.bulkCreate(contentData, {
        individualHooks: true,
        returning: true
    });


    process.exit(0);
}

seedData();