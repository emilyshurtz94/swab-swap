const router = require('express').Router();
const { Content } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    // console.log(req.body)
    try {
        const newContent = await Content.create({
            ...req.body,
            user_id: req.session.user_id
        });
        // console.log(newContent)
        res.json(newContent);
        // console.log(res.json(newContent).filter(post => {
        //     post.zip_code === 85206
        // }))
    } catch (err) {
        console.log(err)
        res.json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const contentData = await Content.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            },
        });

        if (!contentData) {
            res.json({ message: 'No Post found with this id'});
            return;
        }
        res.json(contentData)
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;