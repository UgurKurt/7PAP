var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET home page. */
router.get('/:lastDate', function(req, res, next) {
  
  var latest = req.params.lastDate;
  console.log(latest);
  var query = Post.find({publishDate:{ $lt :Number(latest)}}).sort({publishDate: -1}).limit(7);
  query.exec(function(err, data){
      res.send(data);
  });
});

module.exports = router;