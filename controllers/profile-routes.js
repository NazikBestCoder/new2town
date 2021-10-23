const router = require('express').Router();
const { User, Interest, Activity, UserInterest, UserActivity, Friends } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:user_id', withAuth, async (req, res) => {
  try {

    const profileData = await User.findByPk(req.session.user_id, {
      include:[
        { model: Activity, through: UserActivity, as: "user_activities"},
        { model: Interest, through: UserInterest, as: "user_interests"},
        { model: User, through: Friends, as: "user_friends"},
      ]
    });

    if (!profileData) {
      res.status(404).json({ message: 'No user with this id!' });
      return;
    }

    const profile = profileData.get({ plain: true });
    console.log(profile)
    res.render('myprofile', {profile,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,});

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

router.put('/photo/', withAuth, async (req, res) => {
  console.log("location hit", req.body)
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

    res.status(200).json("Success");

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

});

router.post('/interest/:user_id', withAuth, async (req, res) => {
  try {
    const interestData = await Interest.create({
      name: req.body.interest,
    })

    const profileData = await UserInterest.create({
      user_id: req.session.user_id,
      interest_id: interestData.id,
    })
    res.status(200).json(profileData)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


router.post('/active/:user_id', withAuth, async (req, res) => {
  try {

    const profileData = await UserActivity.create({
      user_id: req.session.user_id,
      activity_id: req.body.activity_id,
    });

    if (!profileData) {
      res.status(404).json({ message: 'No user activity with this id!' });
      return;
    }

    res.status(200).json(profileData);

  } catch (err) {
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