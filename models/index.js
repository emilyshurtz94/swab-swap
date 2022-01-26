const Residents = require('./Residents');
const Retailers = require('./Retailers');

Residents.belongsTo(Retailers, {
    foreignKey: 'Retailers_id'
});

Retailers.hasMany(Residents, {
    foreignKey: 'Retailers_id'
})

module.exports = {
    Residents,
    Retailers
}