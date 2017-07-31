var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title:   String,
	imgUrl: String,
    publishDate: Number,
	author: String,
	votes: {type: Number,default: 0}
});

var model = mongoose.model('Post',schema);
module.exports = model;