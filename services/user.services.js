const {User} = require('../models/user.model');
const {Booking} = require('../models/booking.model');

exports.getUserByEmail = async (query) => {
    const user = await User.findOne(query);
    return user;
};

exports.create = async (query) => {

    
    const user = new User({
        name: query.name,
        password: hash,
        email: query.email,    
    });

    return await user.save();
};

exports.update = async (query) => {
    
};

exports.resetPassword = async (query) => {
    
};

exports.book = async (query) => {

} 
