const router = require('express').Router();
const Post = require('../../models/Post');
const User = require('../../models/User');
const withAuth = require('../utils/auth');

// if user loged in 
//create a new post
router.post('/', withAuth, async (req, res) => {  
    try {
      const postData = await Post.create();
      if (!postData) {
          res.status(404).json({ message: 'Post was not created! Please, try again!' });
          return;
      };
  
        res.status(200).json(postData);

    } catch (err) {
      res.status(500).json(err);
    }
});

// if user loged in 
// update a post
router.put('/:id', withAuth, async (req, res) => {  
    try {
      const postData = await Post.update(req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!postData) {
          res.status(404).json({ message: 'The post was not updated!' });
          return;
      };
  
        res.status(200).json(postData);

    } catch (err) {
      res.status(500).json(err);
    }
});

// if user loged in 
// delete a post
router.delete('/:id', withAuth, async (req, res) => {  
    try {
      const postData = await Post.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!postData) {
          res.status(404).json({ message: 'No post was found with this id!' });
          return;
      };
  
        res.status(200).json(postData);

    } catch (err) {
      res.status(500).json(err);
    }
});