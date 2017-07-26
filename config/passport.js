var passport = require('passport');
var User = require('../models/user');
var localStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done){
    return done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        return done(err,user);
    });
});

passport.use('local.signup',new localStrategy({passReqToCallback:true},function(req ,username, password, done){
    console.log("works pretty right");
    User.findOne({username: username},function(err, user){
        if(err) return done(err);
        if(user) return done(null, false, {message: 'Username is already taken !'});

        var newUser = new User();
        newUser.username = username;
        newUser.password = password;
        newUser.save(function(err, result){
            if(err){
                return done(err);
            }

            return done(null, result);
        });
    });
}));

passport.use('local.signin',new localStrategy({passReqToCallback: true}, function(req, username, password, done){
    User.findOne({username: username}, function(err, user){
        if(err){
            return done(err);
        }
        if(!user){
            return done(null, false, {message: 'No such user!'});
        }

        if(password == user.password){
            return done(null, user);
        }else{
            return done(null, false, {message:'Nah,it is not your password'});
        }
    });
}));