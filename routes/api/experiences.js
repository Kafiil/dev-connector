const router = require('express').Router();
const Profile = require('../../models/Profile');
const passport = require('passport');
const validateExperienceInput = require('../../validations/experience');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const experience = bodyToExperience(req.body);
    const { errors, isValid } = validateExperienceInput(experience);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no corresponding profile';
          return res.status(400).json(errors);
        }

        profile.experience.unshift(experience);
        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => {
            errors.nosave = "couldn't save the experience";
            return res.json(errors);
          });
      })
      .catch(_ => console.log('Some serious shit happened'));
  }
);
module.exports = router;

bodyToExperience = body => {
  return {
    company: body.company,
    title: body.title,
    location: body.location,
    from: body.from,
    to: body.to,
    current: body.current,
    description: body.description
  };
};
