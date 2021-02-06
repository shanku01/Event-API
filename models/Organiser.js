const mongoose = require('mongoose');

const OrganiserSchema = mongoose.Schema({
    name: {
        type: String
    }
});

module.exports = mongoose.model('Organiser', OrganiserSchema);