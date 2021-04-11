// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://userone:userone@maincluster.kie34.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// Schema Definition
const Schema = mongoose.Schema;

const DiarySchema = new Schema({
    name: String,
    date: String,
    content: String,
    author: String,
    time: String,
    img: String
});

// Model Creation
var DiaryData = mongoose.model('diarydata', DiarySchema);

module.exports = DiaryData;