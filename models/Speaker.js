const mongoose = require('mongoose');

const SpeakerSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Speaker', SpeakerSchema);