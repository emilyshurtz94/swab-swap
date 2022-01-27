const router = require("express").Router();
const { Content, User } = require("../../models");
const withAuth = require("../../utils/auth");

// Get all Content data and JOIN with user data
router.get("/", async (req, res) => {
  try {
    const contentData = await contentData.findAll({
      include: [
        {
          model: User,
          attributes: ["user_name"],
        },
      ],
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;