const app = require('express')();
const mongoose = require('mongoose');
const mongoUrl = require('./config/keys').mongoUrl;
users = require('./routes/api/users');
profiles = require('./routes/api/profiles');
posts = require('./routes/api/posts');

// Connect to MongoDB
mongoose
  .connect(
    mongoUrl,
    { useNewUrlParser: true }
  )
  .then(() => console.log('Connected to MongoDB successfully'))
  .catch(r => console.log(r));

// Configure routes
app.use('/api/users', users);
app.use('/api/profiles', profiles);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
