const sequelize = require('../config/connection');
const { Residents, Retailers } = require('../models');
const retailersData = require('./retailers.json');
const residentsData = require('./residents.json');

const seedData = async () => {
    await sequelize.sync({force: true});

    await Residents.bulkCreate(residentsData, {
        individualHooks: true,
        returning: true
    });

    await Retailers.bulkCreate(retailersData, {
        individualHooks: true,
        returning: true
    });


    process.exit(0);
}

seedData();