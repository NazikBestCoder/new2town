const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

    
    try {

        const friendData = await User.findAll({
            where: {
               friend_id: req.session.user_id,
            }
        });

        console.log(friendData)
        const friendAll = friendData.map((friend) => friend.get({ plain: true }));

        // res.render('friendslist', {friendAll} )
    

        res.render('friendslist', {friendAll,
            logged_in: req.session.logged_in,
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