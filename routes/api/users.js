const router = require('express').Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

router.get('/test', (req, res) => {
  res.json({ msg: 'test correctly mapped' });
});

router.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({
          email: 'email already exists'
        });
      } else {
        avatar = gravatar.url(req.body.email, {
          s: 200,
          r: 'pg',
          d: 'mm'
        });

        let newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt
            .hash(newUser.password, salt)
            .then(hash => {
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(user))
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        });
      }
    })
    .catch(err => console.log(err));
});

module.exports = router;
