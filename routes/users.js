var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signup', function(req, res, next){
  var errors = req.flash('error');
  res.render('user/signup',{messages: errors, hasMessages: errors.length > 0});
});

router.post('/signup', passport.authenticate('local.signup',{
  successRedirect:'/users/profile',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next){
  var errors = req.flash('error');
  res.render('user/signin',{messages: errors, hasMessages: errors.length > 0});
});

router.post('/signin', passport.authenticate('local.signin',{
  successRedirect:'/users/profile',
  failureRedirect: '/users/signin',
  failureFlash: true
}));

router.get('/profile', function(req ,res ,next){
  res.render('user/profile',{username: req.user.username});
});

router.get('/logout', function(req, res, next){
  req.logOut();
  res.redirect('/');
})

module.exports = router;
