const mongoose = require('mongoose');
const userSchema = require('./user.model'); // Import the User schema

const EditorSchema = mongoose.Schema({
    usercode: String,// Reference the "Name" field from the User schema
    language: String,
});

const Editor = mongoose.model('Editor', EditorSchema);
module.exports = Editor;
