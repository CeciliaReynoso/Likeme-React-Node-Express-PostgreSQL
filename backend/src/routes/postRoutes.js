const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/posts', postController.getPosts);
router.post('/posts', postController.addPost);
router.put('/posts/like/:id', postController.incrementLike);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
