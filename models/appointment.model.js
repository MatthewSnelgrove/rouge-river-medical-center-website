const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        unique : false,
        trim : true,
        minLength : 1
    }, 
    lastName : {
        type : String,
        required : true,
        unique : false,
        trim : true,
        minLength : 1
    },
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        minLength : 1
    },
    date : {
        type : Date,
        required : true,
    }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;