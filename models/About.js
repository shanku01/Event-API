const mongoose = require('mongoose');

const AboutSchema = mongoose.Schema({
    text: {
        type: String,
    },
    title: {
        type: String,
    },
    qoute: {
        type: String,
    },
    list: {
        type: Array,
        items:String
    },
    pics: {
        type: Array,
        items:String
    },
    files: {
        type: Array,
        items:String
    },
    vedio: {
        type: Array,
        items:String
    }
});

module.exports = mongoose.model('About', AboutSchema);