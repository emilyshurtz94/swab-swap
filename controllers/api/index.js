const router = require('express').Router();
const retailerRoutes = require('./retailerRoutes');
const residentRoutes = require('./residentRoutes');
const zipcodeRoutes = require('./zipcodeRoutes');

router.use('/resident', residentRoutes);
router.use('/retailer', retailerRoutes);
router.use('/zipcode', zipcodeRoutes);

module.exports = router;