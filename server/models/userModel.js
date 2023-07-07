
const mongoose = require('mongoose');


const UserModel = mongoose.model('users', {
    title: String,
    description: String,
});

module.exports = UserModel

