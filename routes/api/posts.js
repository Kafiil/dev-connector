const router = require('express').Router();

router.get('/test', (req, res) => {
  res.json({ msg: 'test correctly mapped' });
});

module.exports = router;
