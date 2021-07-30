// Dependencies
// =============================================================
const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================

// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
  Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// GET route for retrieving posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
  // Retrieve all of the posts of a specific category
  Post.findAll({
    where: {
      category: req.params.category
    }
  })
    .then(dbPost => {
      res.json(dbPost);
    });
});


// GET route for retrieving a single post
// We can get the id of the post from 'req.params.id'
router.get('/api/posts/:id', (req, res) => {
  // Retrieve a single post using the id from 'req.params.id'
  Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbPost => {
      res.json(dbPost);
    });
});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
  // Create a new post with the data in 'req.body'
  Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  })
    .then(dbPost => {
      res.json(dbPost);
    });
});

// DELETE route for deleting a post
router.delete('/api/posts/:id', (req, res) => {
  // Delete a post using the id from 'req.params.id'
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPost => {
      res.json(dbPost);
    });
});

// PUT route for updating a post
router.put('/api/posts/:id', (req, res) => {
  // Update a post with the data in 'req.body'
  Post.update({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }, {
    where: {
      id: req.params.id
    }
  })
    .then(dbPost => {
      res.json(dbPost);
    });
});

module.exports = router;
