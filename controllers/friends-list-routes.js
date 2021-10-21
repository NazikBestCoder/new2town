const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try {

        const friendData = await User.findAll({
            where: {
               friend_id: req.session.user_id,
            }
        })

        const friendAll = friendData.map((friend) => friend.get({ plain: true }));

        res.render('friendslist', friendAll);
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
});

module.exports = router;