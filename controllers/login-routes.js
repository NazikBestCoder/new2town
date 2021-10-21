const router = require('express').Router();
const { User, Interest, Activity } = require('../models');

router.get('/', async (req, res) =>{
    try {
        res.render('login');
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;