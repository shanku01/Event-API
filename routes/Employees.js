const express = require('express');
const Employee = require('../models/Employees');
const router = express.Router();

//Finding all Employee
router.get('/', async(req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Submitting Employee
router.post('/', async(req, res) => {
    const employee = new Employee({
        name:req.body.name,
        email:req.body.email,
        dateOfBirth:req.body.dateOfBirth,
        phoneNumber:req.body.phoneNumber,
        salary:req.body.salary,
        department: req.body.department      
    });
    try {
        await employee.save();
        res.json(employee);
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//Delete Employee
router.delete('/:EmployeeId', async(req, res) => {
    try {
        await Employee.deleteOne({ _id: req.params.EmployeeId });
        res.send("OK")
    } catch (err) {
        res.json({
            message: err
        });
    }
});

//update a Employee
router.patch('/:EmployeeId', async(req, res) => {
    try {
        await Employee.updateOne({ _id: req.params.EmployeeId }, { $set: { title: req.body.title } });
        res.send("OK")
    } catch (err) {
        res.json({
            message: err
        });
    }
});

module.exports = router;