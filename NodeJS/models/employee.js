const mongoose = require('mongoose');

var Employee = mongoose.model('employees', {
    userName: { type: String },
    userId: { type: String },
    deviceName: { type: String },
    department: { type: String }
});

module.exports = { Employee };