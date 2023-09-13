const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;