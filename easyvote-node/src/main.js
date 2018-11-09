const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const port = process.env.PORT || 8080;        // set our port

mongoose.connect('mongodb://database:27017/contactform');
mongoose.connection.on('error', error => console.log(error) );
mongoose.Promise = global.Promise;

require('./auth/auth');

app.use( bodyParser.urlencoded({ extended : true }) );

app.use(bodyParser.json())

const routes = require('./routes/routes');
const secureRoute = require('./routes/secure-route');

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', routes);
//We plugin our jwt strategy as a middleware so only verified users can access this route
app.use('/api/admin', passport.authenticate('jwt', { session : false }), secureRoute );

//Handle errors
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({ error : err && err.message});
});



// Create Admin on Meteor startup
const UserModel = require('./model/user');

app.listen(port, function() {
  console.log('Server listening at port: ', port);
  try {
    UserModel.findOne({
      email: 'himanshu@gmail.com',
    }, function (error, user) {
        if( !user ){
          //If the user isn't found in the database, return a message
          UserModel.create({
            email: 'himanshu@gmail.com', 
            password: 'himanshu', 
          });
        } 
    });   
  } catch(error) {
    console.log(error);
  }
});

