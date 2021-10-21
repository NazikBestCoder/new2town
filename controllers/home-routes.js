const router = require('express').Router();
const { User, Interest, Activity } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) =>{
    try {
        const userData = await User.findAll();
        
        const userAll = userData.map((user) => user.get({ plain: true }));
        res.render('main', {userAll,
            // logged_in: req.session.logged_in,
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})


module.exports = router;