const router = require('express').Router();
let Appointment = require('../models/appointment.model');

//Authenticate or redirect to Oscar login page
router.route('/booking').get((req, res) => {
    res.send('booking');
});

//
router.route('/').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const date = Date.parse(req.body.date);

    const newAppointment = new Appointment({firstName, lastName, email, date});

    newAppointment.save()
    .then(() => res.json('APPOINTMENT NOT YET BOOKED. CHECK EMAIL TO CONFIRM APPOINTMENT'))
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;
