const router = require('express').Router();
const Post = require('../../models/Post');
const passport = require('passport');
const validatePostInput = require('../../validations/post');

router.get('/', (req, res) => {
  Post.find().then(posts => res.json(posts));
});

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    if (!isValid) return res.status(400).json(errors);

    const newPost = new Post({
      text: req.body.text,
      name: req.user.name,
      avatar: req.user.avatar
    });
    newPost
      .save()
      .then(post => res.json(post))
      .catch(err => res.status(400).json(err));
  }
);

router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Post.findByIdAndRemove(req.params.id).then(() =>
      res.json({ success: true })
    );
  }
);

module.exports = router;
