module.exports = {
  	MONGO_URI : '',
  	JWT_TOKEN : '',

  	googleAuth : {
          'clientID'      : 'your-secret-clientID-here',
          'clientSecret'  : 'your-client-secret-here',
          'callbackURL'   : 'http://localhost:8080/auth/google/callback'
  	}
}

//fill in the empty strings with your own credentials. 
//copy and paste and save to a file called config.js within this directory