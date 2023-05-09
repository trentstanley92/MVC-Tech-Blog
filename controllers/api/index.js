const router = require('express').Router();

const commentRoutes = require('./CommentRoutes');
const postRoutes = require('.PostRoutes');
const userRoutes = require('./User');

router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

module.exports = router;