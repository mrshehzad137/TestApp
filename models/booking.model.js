const config = require('config');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
        unique: true
     },
     user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User' 
    },
});


const booking = mongoose.model('Booking', BookingSchema);

exports.Booking = booking; 