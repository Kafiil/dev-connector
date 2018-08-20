const app = require('express')();
const mongoose = require('mongoose');
const mongoUrl = require('./config/keys').mongoUrl;

// Connect to MongoDB
mongoose
  .connect(
    mongoUrl,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(r => console.log(r));

app.get('/', (req, res) => {
  res.json({ msg: 'working !' });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
