const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// user does Login
// get user data and create a session after user verification 
router.post('/login', async (req, res) => {  
  try {
    // find a user in db by username
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
        res.status(404).json({ message: 'Login failed. Please try again!' });
        return;
    };
    // verify password
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!validPassword) {
      res.status(400).json({ message: 'Login failed. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
    
    // if user was found by provided username and password was verified then go to personal-page
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

//user creates an profile/account
//create a new user and a session
router.post('/sigup', async (req, res) => {
  try {
    const userData = await User.create();
    if (!userData) {
        res.status(404).json({ message: 'Failed to sigup. Please try again!' });
        return;
    };

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// user does logout
//end os session, user in no longer loged in.
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