const mongoose = require('mongoose')

// this is for log in credentials
var schema = new mongoose.Schema ({
    teamname: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    coins:{
        type: Number
    },
    i:{
        type: Number
    }
}, {
    timestamps: true
})

module.exports = UserDetails = mongoose.model('userdetails2', schema)