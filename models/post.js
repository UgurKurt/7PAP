var mongoose = require('mongoose');

var schema = mongoose.Schema({
	title:   String,
	imgUrl: String
});

var model = mongoose.model('Post',schema);
module.exports = model;