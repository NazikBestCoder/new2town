const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) =>{
    try {
        // const userData = await User.findAll();
        
        // const userAll = userData.map((user) => user.get({ plain: true }));

        res.render('home', {
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

router.get('/search/:act', async (req, res) =>{
  try {

      console.log(req.params.act);

      // const currentUserData = await User.findByPk(req.session.user_id);

      // const currentUser = currentUserData.get({ plain: true });

      const userData = await User.findAll();
      
      const userAll = userData.map((user) => user.get({ plain: true }));

      console.log(userAll);

    //   res.render('partials/user-cards', {
    //     logged_in: req.session.logged_in,
    //     user_id: req.session.user_id,
    //     userAll,
    // });
        //  res.render('partials/user-cards', {
        // logged_in: req.session.logged_in,
        // user_id: req.session.user_id,
        // userAll,
      res.status(200).json(userAll);

  
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
})

router.get('/gen/:act', async (req, res) =>{
  try {

      console.log(req.params.act);

      // const currentUserData = await User.findByPk(req.session.user_id);

      // const currentUser = currentUserData.get({ plain: true });

      const userData = await User.findAll();
      
      const userAll = userData.map((user) => user.get({ plain: true }));

      console.log("round 2!");

      res.render('home', {
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
      userAll,
      })
  
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
})


module.exports = router;