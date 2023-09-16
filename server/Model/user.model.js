const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const User = mongoose.model('User', userSchema);
module.exports = User;
