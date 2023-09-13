const mongoose = require('mongoose');

const CodesSchema = mongoose.Schema({
    problem: String,
    problemDescription: String,
    input: String,
    output: String
});

const Codes = mongoose.model('Codes', CodesSchema);
module.exports = Codes;