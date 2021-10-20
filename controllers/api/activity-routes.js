const router = require('express').Router();
const { Activity } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const activityData = await Activity.findAll();

        const activityAll = activityData.map((activity) => activity.get({ plain: true }));
        res.render('main', {
            activityAll,
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {

    Activity.create(req.body)
    .then((newActivity) => {
      res.json(newActivity);
    })
    .catch((err) => {
      res.json(err);
    });
  });


router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Activity.update({
        name: req.body.name,
    },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((updatedActivity) => {
            // Sends the updated book as a json response
            res.json(updatedActivity);
        })
        .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Activity.destroy({
        where: {
            id: req.params.id,
        },
    })
        .then((deletedAct) => {
            res.json(deletedAct);
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