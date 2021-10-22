const router = require('express').Router();
const { User, Interest, Activity, UserActivity, Friends, UserInterest } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) =>{
    try {

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

      const userData = await User.findAll({
      
        include: [
          { model: Activity, through: UserActivity, as: "user_activities"},
          { model: Interest, through: UserInterest, as: "user_interests"},
          { model: User, through: Friends, as: "user_friends"},
        ],
      });

      
      const userAll = userData.map((user) => user.get({ plain: true }));

      const filteredUsers = userAll.filter((user) => {
        for (let i = 0; i < user["user_activities"].length; i++ ){
          if(user["user_activities"][i].id == req.params.act && user.id !== req.session.user_id){
            return user;
          }
        }
      })

     
      console.log(filteredUsers);

      res.status(200).json(filteredUsers);

  
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
})


module.exports = router;