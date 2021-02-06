const mongoose = require('mongoose');
const Organiser = require('./Organiser');
const About = require('./About');
const Speaker = require('./Speaker');
const Modrater = require('./Modrater');
const Resource = require('./Resource');

const EventSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    link: {
        type: String,
        required: false
    },
    about: {
        type: mongoose.Schema.Types.ObjectId,
        ref: About
    },
    speakers: {
        type:Array,
        items:{
            type: mongoose.Schema.Types.ObjectId,
            ref: Speaker
        }
    },
    modraters: {
        type:Array,
        items:{
            type: mongoose.Schema.Types.ObjectId,
            ref: Modrater
        }
    },
    resources: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Resource
    },
    info:{
        type:String,
        required:false
    },
    organisers:{
        type:Array,
        items:{
            type: mongoose.Schema.Types.ObjectId,
            ref: Organiser
        }
    },
    tags:{
        type:Array
    }
});

module.exports = mongoose.model('Event', EventSchema);