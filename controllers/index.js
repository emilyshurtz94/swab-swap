const router = require('express').Router();
const {Content} = require('../models');
const apiRoutes  = require('./api');

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
    const findAllContent = await Content.findAll();
    res.json(findAllContent);
})

module.exports = router;