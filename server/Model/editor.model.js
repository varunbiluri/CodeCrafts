const mongoose = require('mongoose');

const EditorSchema = mongoose.Schema({
    usercode: String,
});

const Editor = mongoose.model('Editor', EditorSchema);
module.exports = Editor;