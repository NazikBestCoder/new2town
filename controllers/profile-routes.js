const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/:user_id', withAuth, async (req, res) =>{
    try {

        const profileData = await User.findByPk(req.session.user_id);

        if(!profileData) {
            res.status(404).json({message: 'No user with this id!'});
            return;
        }

        const profile = profileData.get({ plain: true });

        res.render('myprofile', profile);
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
})

router.put('/:user_id', withAuth, async, (req, res) => {

  try {

    const profileData = await User.update({
      location: req.body.location,
    },
    {
      where: {
        id: req.session.user_id,
      },
    }
    );

    const profile = profileData.put({ plain: true });

    res.render('myprofile', profile);

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