var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/', function(req, res, next) {
  var query = Post.find().limit(7);
  query.exec(function(err, data){
      res.send(data);
  });
});

module.exports = router;