const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../../models/User');

// Added comments describing the functionality of this `login` route
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


    
    // if user was found by provided username and password was verified then go to personal-page
    res.status(200).json({ message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;