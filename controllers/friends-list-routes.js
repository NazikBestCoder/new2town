const router = require('express').Router();
const { User, Interest, Activity, UserInterest, UserActivity, Friends } = require('../models');
const withAuth = require('../utils/auth');

router.get('/friend/:user_id', withAuth, async (req, res) => {

    
    try {

        const friendData = await User.findByPk(req.session.user_id, {
            include:[
              { model: Activity, through: UserActivity, as: "user_activities"},
              { model: Interest, through: UserInterest, as: "user_interests"},
              { model: User, through: Friends, as: "user_friends"},
            ]
        });

        
        const friendAll = friendData.get({ plain: true });
        console.log(friendAll)
        res.render('friendslist', {friendAll,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
        });
    
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