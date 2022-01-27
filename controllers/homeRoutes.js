const router = require("express").Router();
const { Content, User } = require("../models");
const withAuth = require("../utils/auth");

// Get all Content data and JOIN with user data
router.get("/", async (req, res) => {
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

router.get('/user', withAuth, async (req, res) => {
    try{
        const userData = await User.findbyPK(req.session.id, {
            attributes: { exclude: ['password'] },
            include: [{ model: Content }],
        });

        const user = userData.get({ plain: true });

        res.render('user', {
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
      res.redirect('/user');
      return;
    }
  
    res.render('login');
  });
  
  Talk.ready.then(function () {
    var me = new Talk.User({
      id: '123456',
      name: 'Alice',
      email: 'alice@example.com',
      photoUrl: 'https://demo.talkjs.com/img/alice.jpg',
      welcomeMessage: 'Hey there! How are you? :-)',
    });
    window.talkSession = new Talk.Session({
      appId: 'taEn5Ook',
      me: me,
    });
    var other = new Talk.User({
      id: '654321',
      name: 'Sebastian',
      email: 'Sebastian@example.com',
      photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
      welcomeMessage: 'Hey, how can I help?',
    });
  
    var conversation = talkSession.getOrCreateConversation(
      Talk.oneOnOneId(me, other)
    );
    conversation.setParticipant(me);
    conversation.setParticipant(other);
  
    var inbox = talkSession.createInbox({ selected: conversation });
    inbox.mount(document.getElementById('talkjs-container'));
  });
  module.exports = router;