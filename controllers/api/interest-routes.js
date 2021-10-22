const router = require('express').Router();
const { Interest } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) =>{
    try {
        const interestData = await Interest.findAll();
        
        const interestAll = interestData.map((interest) => interest.get({ plain: true }));
        res.render('main', {interestAll,
            logged_in: req.session.logged_in,
        });
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
      } 
});

router.post('/', (req, res) => {

    Interest.create(req.body)
    .then((newInterest) => {
      res.json(newInterest);
    })
    .catch((err) => {
      res.json(err);
    });
  });

router.put('/:id', (req, res) => {
    Interest.update({
        name: req.body.name,
    },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedInterest) => {
            res.json(updatedInterest);
        })
        .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Interest.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedInter) => {
            res.json(deletedInter);
        })
        .catch((err) => res.json(err));
});


router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;