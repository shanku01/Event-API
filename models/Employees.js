const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    department: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Employees', EmployeeSchema);