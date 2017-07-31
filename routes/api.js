var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/getPosts/:lastDate', function(req, res, next) {  
  var latest = req.params.lastDate;
  console.log(latest);
  var query = Post.find({publishDate:{ $lt :Number(latest)}}).sort({publishDate: -1}).limit(7);
  query.exec(function(err, data){
      res.send(data);
  });
});

router.post('/upvote/:id', function(req, res, next){
  Post.findById(req.params.id, function(err, post){
      post.votes += 1;
      post.save();
  });
});

router.post('/downvote/:id', function(req, res, next){
  Post.findById(req.params.id, function(err, post){
      post.votes -= 1;
      post.save();
  });
});

module.exports = router;