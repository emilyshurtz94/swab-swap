const router = require('express').Router();
const {Residents} = require('../models');
const apiRoutes  = require('./api');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    const findAllResidents = await Residents.findAll();
    res.json(findAllResidents);
})

module.exports = router;