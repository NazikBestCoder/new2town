const router = require('express').Router();
const { User, Interest, Activity } = require('../models');

router.get('/', async (req, res) =>{
    try {
        res.render('signup');
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
})

module.exports = router;