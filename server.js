const app = require('express')();
const mongoose = require('mongoose');
const mongoUrl = require('./config/keys').mongoUrl;
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const profiles = require('./routes/api/profiles');
const posts = require('./routes/api/posts');
const passport = require('passport');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    mongoUrl,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(r => console.log(r));

app.use(passport.initialize());
// Passport middleware
require('./config/passport')(passport);

// Configure routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
