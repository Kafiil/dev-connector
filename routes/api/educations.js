const router = require('express').Router();
const Profile = require('../../models/Profile');
const passport = require('passport');
const validateEducationInput = require('../../validations/education');

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const education = bodyToEducation(req.body);
    console.log(education);
    const { errors, isValid } = validateEducationInput(education);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          errors.noprofile = 'There is no corresponding profile';
          return res.status(400).json(errors);
        }

        profile.education.unshift(education);
        profile
          .save()
          .then(profile => res.json(profile))
          .catch(err => {
            errors.nosave = "couldn't save the education";
            return res.json(errors);
          });
      })
      .catch(_ => console.log('Some serious shit happened'));
  }
);
module.exports = router;

bodyToEducation = body => {
  return {
    school: body.school,
    degree: body.degree,
    fieldofstudy: body.fieldofstudy,
    from: body.from,
    current: body.current,
    description: body.description
  };
};
