const router = require('express').Router();
const { User, Interest, Activity, UserInterest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:user_id', withAuth, async (req, res) => {
  try {

    const profileData = await User.findByPk(req.session.user_id);

    if (!profileData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }

    const profile = profileData.get({ plain: true });

    res.render('myprofile', profile);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

router.put('/city/:user_id', withAuth, async (req, res) => {
  console.log("location hit")
  try {

    const profileData = await User.update(req.body,
      {
        where: {
          id: req.session.user_id,
        },
      }
    );

    if (!profileData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }

    res.status(200).json("Success");

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.put('/status/:user_id', withAuth, async (req, res) => {
  try {
    const profileData = await User.update(req.body,
      {
        where: {
          id: req.session.user_id,
        },
      }
    );

    if (!profileData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }
    console.log("status hit")

    res.status(200).json("Success");

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.post('/interest/:user_id', withAuth, async (req, res) => {
  try {
    const profileData = await UserInterest.create({
      user_id: req.session.user_id,
      Interest_id: req.body
    })
    res.json(profileData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;