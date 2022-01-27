const router = require('express').Router();
const contentRoutes = require('./contentRoutes');
const userRoutes = require('./userRoutes');
// const zipcodeRoutes = require('./zipcodeRoutes');

router.use('/user', userRoutes);
router.use('/content', contentRoutes);
// router.use('/zipcode', zipcodeRoutes);

module.exports = router;