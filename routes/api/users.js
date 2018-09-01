const router = require('express').Router();
const User = require('../../models/User');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const validateRegisterInput = require('../../validations/register');
const validateLoginInput = require('../../validations/login');

router.get('/', (_req, res) => {
  User.find({}, (err, users) => {
    if (err) res.status(500).json(err);
    res.json(users);
  });
});

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

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
                .then(user =>
                  res.json({
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                  })
                )
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        });
      }
    })
    .catch(err => console.log(err));
});

router.post('/login', (req, res) => {
  email = req.body.email;
  password = req.body.password;

  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ email: 'User not found' });
    bcrypt.compare(password, user.password).then(match => {
      if (!match) res.status(400).json({ password: 'Incorrect password' });

      // User matcher
      const payload = {
        id: user.id,
        name: user.name,
        avatar: user.avatar
      };
      jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
        res.json({ success: true, token: `Bearer ${token}` });
      });
    });
  });
});

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      name: req.user.name,
      email: req.user.email,
      avatar: req.user.avatar
    });
  }
);

module.exports = router;
