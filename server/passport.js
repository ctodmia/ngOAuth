var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User').user;
var configAuth = require('./config.js');


passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

passport.use(new LocalStrategy(
	function(username, password, done) {
		User.findOne({ username: username }, function (err, user) {
			if (err) { 
				return done(err); 
			}
			if (!user) {
				return done(null, false, { message: 'this username is incorrect.' });
			}
			return done(null, user);
		});
	}
));

passport.use(new GoogleStrategy({

        clientID        : configAuth.googleAuth.clientID,
        clientSecret    : configAuth.googleAuth.clientSecret,
        callbackURL     : configAuth.googleAuth.callbackURL,

    },
    function(token, refreshToken, profile, done) {
    	console.log('this is the returning profile', profile)
        // make the code asynchronous
        // User.findOne won't fire until we have all our data back from Google
        // process.nextTick(function() {

            // try to find the user based on their google id
            // User.findOne({ 'google.id' : profile.id }, function(err, user) {
            //     if (err)
            //         return done(err);

            //     if (user) {

            //         // if a user is found, log them in
            //         return done(null, user);
            //     } else {
            //         // if the user isnt in our database, create a new user
            //         var newUser          = new User();

            //         // set all of the relevant information
            //         newUser.google.id    = profile.id;
            //         newUser.google.token = token;
            //         newUser.google.name  = profile.displayName;
            //         newUser.google.email = profile.emails[0].value; // pull the first email

            //         // save the user
            //         newUser.save(function(err) {
            //             if (err)
            //                 throw err;
            //             return done(null, newUser);
            //         });
            //     }
            // });
        // });

    })
);

// });
