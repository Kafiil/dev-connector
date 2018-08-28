const app = require('express')();
const mongoose = require('mongoose');
const mongoUrl = require('./config/keys').mongoUrl;
const bodyParser = require('body-parser');
const passport = require('passport');
const apiRoutes = require('./routes/api');
const morgan = require('morgan');

// Logging requests
app.use(morgan('tiny'));

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

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Configure API routes
app.use('/api', apiRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
