const express = require('express');

//models
const Event = require('../models/Event');
const Organiser = require('../models/Organiser');
const About = require('../models/About');
const Speaker = require('../models/Speaker');
const Modrater = require('../models/Modrater');
const Resource = require('../models/Resource');

const router = express.Router();

//Finding all Event
router.get('/', async(req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Submitting Event
router.post('/', async(req, res) => {
    const modraters =req.body.modraters.map(item=>new Modrater(item));
    const about = new About(req.body.about);
    const speakers =req.body.speakers.map(item=>new Speaker(item)); 
    const organisers =req.body.organisers.map(item=>new Organiser(item));
    const resource = new Resource(req.body.resources);
    const event = new Event({
        title:req.body.title,
        date:req.body.date,
        link:req.body.link,
        about:about,
        speakers:speakers,
        modraters: modraters,
        resources: resource,
        info: req.body.info,
        organisers: organisers,
        tags: req.body.tags      
    });
    try {
        await about.save();
        await speakers.map(item=>item.save());
        await modraters.map(item=>item.save());
        await resource.save();
        await organisers.map(item=>item.save());
        await event.save();
        res.json(event);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Delete Employee
router.delete('/:EventId', async(req, res) => {
    try {
        await Event.deleteOne({ _id: req.params.EventId });
        res.send("Deleted")
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//update a Employee
router.patch('/:EventId', async(req, res) => {
    try {
        await Event.updateOne({ _id: req.params.EventId }, { $set: { title: req.body.title } });
        res.send("updated")
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;