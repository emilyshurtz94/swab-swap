const router = require("express").Router();
const res = require("express/lib/response");
const { Content, User } = require("../models");
const withAuth = require("../utils/auth");

router.get('/homepage', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/content');
    return;
  }
  res.render('homepage');
});

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
router.get('/content/:zip_code', withAuth, async (req, res) => {
    try{
        const contentData = await Content.findBy(req.params.zip_code, {
            include: [
                {
                    model: User,
                    attributes: ['user_name']
                },
            ],
        });

        const content = contentData.get({plain: true}).filter(post => post.zip_code === req.params.zip_code);
        if (!req.session.logged_in) {
          res.redirect('/login');
          return
        }
        res.render('/content/:zip_code', {
            ...content,
            logged_in: req.params.logged_in
        });
    } catch (err) {
        res.json(err);
    }
});

// homepage route
router.get('/', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('homepage');
});

// message route
router.get('/message', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (!req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('message', {
    logged_in: req.session.logged_in
  });
});

// form route-fix
router.get('/form', withAuth, async (req, res) => {
  try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Content }],
        });
        const user = userData.get({ plain: true });
        res.render('form', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.json(err.message);
    }
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/content');
      return;
    }
  
    res.render('login');
  });
  
  module.exports = router;