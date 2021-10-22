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

      let currentUser;

      function findCurrentUser () {
        for (let i = 0; i < userAll.length; i++ ){
          if (userAll[i].id === req.session.user_id){
            currentUser = userAll[i];
          }
        }
        currentUser.interestIds = [];
        for (let i = 0; i < currentUser['user_interests'].length; i++){
          currentUser.interestIds.push(currentUser['user_interests'][i].id);
        }
      }
      await findCurrentUser();
      // console.log("CURRENT USER:");
      // console.log(currentUser);
      // console.log("CURRENT USER^");

      const filteredUsers = userAll.filter((user) => {
        for (let i = 0; i < user["user_activities"].length; i++ ){
          if(user["user_activities"][i].id == req.params.act && user.id !== req.session.user_id && currentUser.location === user.location){
            return user;
          }
        }
      })

      function sortByInterests(users){
        for (let i = 0; i < users.length; i ++){
          users[i].commonInterests = [];
          users[i]['user_interests'].forEach(interest => {
            console.log(users[i]['user_interests']);
            if (currentUser.interestIds.includes(interest.id)){
              users[i].commonInterests.push(interest.name);
            }
          });
        }
        users.sort((a, b) => (a.commonInterests.length > b.commonInterests.length) ? -1 : 1)
        console.log(users);
      };

      sortByInterests(filteredUsers)

     
      console.log(filteredUsers);

      res.status(200).json(filteredUsers);

  
  } catch (err) {
      console.log(err);
      res.status(500).json(err);
    } 
})


module.exports = router;