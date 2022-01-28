const router = require("express").Router();
const res = require("express/lib/response");
const { Content, User } = require("../models");
const withAuth = require("../utils/auth");

// Get all Content data and JOIN with user data
router.get("/content", async (req, res) => {
  try {
    const contentData = await Content.findAll({
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });

    // serlializing the data for the template.
    const content = contentData.map((content) => content.get({ plain: true }));
console.log(content)
    // passing the session flag and serialized data into template.
    res.render("content", {
      content,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.json(err);
  }
});

// get content data by zip code
router.get('/content/:zip_code', async (req, res) => {
    try{
        const contentData = await Content.findBy(req.params.zip_code, {
            include: [
                {
                    model: User,
                    attributes: ['user_name']
                },
            ],
        });

        const content = contentData.get({plain: true});

        res.render('content', {
            ...content,
            logged_in: req.params.logged_in
        });
    } catch (err) {
        res.json(err);
    }
});
// homepage route
// router.get('/')
// res.render('homepage')

// form route-fix
router.get('/form', withAuth, async (req, res) => {
    try{
        const userData = await User.findbyPK(req.session.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Content }],
        });

        const user = userData.get({ plain: true });

        res.render('form', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.json(err);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/form');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;