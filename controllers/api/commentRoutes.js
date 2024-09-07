const router = require('express').Router();
const Comment = require('../../models/Comment');
const User = require('../../models/User');
const withAuth = require('../../utils/auth');

// if user loged in 
//create a new comment under the smb post
router.post('/', withAuth, async (req, res) => {  
    try {
      const commentData = await Comment.create();
      if (!commentData) {
          res.status(404).json({ message: 'Post was not created! Please, try again!' });
          return;
      };
  
        res.status(200).json(postData);

    } catch (err) {
      res.status(500).json(err);
    }
});