const router = require('express').Router();
const { Post, User } = require('../models');
const withAuth = require('../utils/auth');

// if user is not LogedIn
// or if user is LogedIn
// display Homepage with all posts that were created by all users
router.get('/', async (req, res) => {
    try {
      const postData = await Post.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log('controllers/homepageRouts.js: postData that recieved from db:');
      console.log(posts);
      res.render('homepage', { 
        posts: posts, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
});

// user wants to login
// display Login page for user, so user can log in
router.get('/login', async (req, res) => {
  try{
      res.render('signin');
  } catch (err) {
    res.status(500).json(err);
  }
});

// user wants to create a profile/account
// display SignUp page for user, so user can create an profile and log in into it
router.get('/signup', async (req, res) => {
  try{
      res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user pass uathentification then display a landing page - an empty Dashboard page
router.get('/profile', withAuth, async (req, res) => {
  try {
    // // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Post }],
    // });

    // const user = userData.get({ plain: true });

    //render empty page
    res.render('dashboard', {
      //...user,
      //logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user is LogedIn and click on a Dashboard nav link 
// display a Dashboard with all posts that this user created
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const user = userData.get({ plain: true });

    res.render('dashboard', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user is LogedIn and click on a NewPost button (in a Dashboard)
// display a Newpost page
router.get('/newpost', withAuth, async (req, res) => {
  try {
        res.render('newpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user is LogedIn and click on his/here post (in a Dashboard)
// display a Post page with a title and a content of this post and options to update & delete his/her post
router.get('/myposts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.body.id } });

    const post = postData.get({ plain: true });

    res.render('mypost', {
      ...post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// if user is LogedIn and click on a post title (in The Tech Blog)
// display a post page with a comment option
router.get('/posts/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findOne({ where: { id: req.body.id } });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;