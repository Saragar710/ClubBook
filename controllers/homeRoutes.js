const router = require('express').Router();
const { Club, User } = require('../models');
const withAuth = require('../utils/authorize');

router.get('/', async (req, res) => {
  try {
    // Get all clubs and JOIN with user data
    const clubData = await Club.findAll({
    });

    // Serialize data so the template can read it
    const clubs = clubData.map((club) => club.get({ plain: true }));

    // Pass serialized data and session flag into template
<<<<<<< HEAD
    res.render('homepagez', { 
=======
    res.render('main.html', { 
>>>>>>> 2a04f304b13c98aa5a177cdf73c8e1a3d2b87c2e
      clubs, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/club/:id', async (req, res) => {
  try {
    const clubData = await Club.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const club = clubData.get({ plain: true });

    res.render('club', {
      club,
      // logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Club }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // already logged in, redirect  to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;