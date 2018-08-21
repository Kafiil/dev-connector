const users = require('./users');
const posts = require('./posts');
const profiles = require('./profiles');

const router = require('express').Router();

// Configure API routes
router.use('/users', users);
router.use('/profiles', profiles);
router.use('/posts', posts);

module.exports = router;
