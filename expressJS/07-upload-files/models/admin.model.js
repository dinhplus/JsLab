var mongoose = require('mongoose');
var adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    image: String,
    phone: String,
    age: Number,
    currentSession: String
});
var Admin = mongoose.model('Admin', adminSchema, 'admin');
module.exports = Admin;