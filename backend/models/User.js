const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profiePic: {
        type: String,
        default: ""
    }
}, { timestamps: true });

module.exports = new mongoose.model('User', userSchema);










