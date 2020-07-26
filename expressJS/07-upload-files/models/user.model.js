var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    image: String,
    phone: String,
    age: Number,
    currentSession: String
});
var User = mongoose.model('User', adminSchema, 'users');
module.exports = User;