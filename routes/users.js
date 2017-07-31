var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Post = require('../models/post');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signup', function(req, res, next){
  var errors = req.flash('error');
  res.render('user/signup',{messages: errors, hasMessages: errors.length > 0});
});

router.post('/signup', passport.authenticate('local.signup',{
  successRedirect:'/users/profile/me',
  failureRedirect: '/users/signup',
  failureFlash: true
}));

router.get('/signin', function(req, res, next){
  var errors = req.flash('error');
  res.render('user/signin',{messages: errors, hasMessages: errors.length > 0});
});

router.post('/signin', passport.authenticate('local.signin',{
  successRedirect:'/users/profile/me',
  failureRedirect: '/users/signin',
  failureFlash: true
}));

router.get('/profile/:username', isLoggedIn, function(req ,res ,next){

  if(req.params.username == 'me'){
    res.render('user/profile',{user: req.user});
    return;   
  }

  User.findOne({username:req.params.username},function(err, data){
    if(err){
      res.render('error',{message: 'Whoops,somethings went wrong'});
      return;
    }

    if(data == null){
      res.render('error',{message: 'There is no such user!'});
      return;
    }

    res.render('user/profile',{user: data});
  });
});

router.get('/upload',function(req, res, next){
  res.render('user/upload');
});

router.post('/upload',function(req, res, next){
  var newPost = new Post();
  newPost.imgUrl = req.body.URL;
  newPost.title = req.body.title;
  newPost.publishDate = Number(Date.now());
  newPost.author = req.user.username;
  newPost.save(function(err, data){
    res.redirect('/users/profile/me');
  });
});

router.get('/logout', function(req, res, next){
  req.logOut();
  res.redirect('/');
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/');
}

module.exports = router;
