const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) =>{
    try {
        // const userData = await User.findAll();
        
<<<<<<< HEAD
        const userAll = userData.map((user) => user.get({ plain: true }));
        res.render('myprofile', {userAll,
            logged_in: req.session.logged_in,
=======
        // const userAll = userData.map((user) => user.get({ plain: true }));

        res.render('home', {
            logged_in: req.session.logged_in,
            user_id: req.session.user_id
>>>>>>> bfb3a66fdb9d29c5d8af3648e04fed99778ea3bd
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

<<<<<<< HEAD
router.get('/friendslist', async (req, res) => {

    try {

        const friendData = await User.findAll({
            where: {
               friend_id: req.session.user_id,
            }
        });
        console.log("hello")

        const friendAll = friendData.map((friend) => friend.get({ plain: true }));

        console.log(friendAll)
        
        res.render('friendslist', {friendAll} )
    
        // res.render('friendslist', {friendAll,
        //     logged_in: req.session.logged_in,
        // });
    
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
=======
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

>>>>>>> bfb3a66fdb9d29c5d8af3648e04fed99778ea3bd

module.exports = router;