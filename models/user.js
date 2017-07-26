var mongoose = require('mongoose');

var schema = mongoose.Schema({
    username:{type: String, required: true},
    password:{type: String, required: true}
});

var model = mongoose.model('User',schema);

module.exports = model;