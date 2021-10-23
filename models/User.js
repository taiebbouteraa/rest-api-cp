const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    }, email: {
        type: String,
        required: true
    }, number: {
        type: Number,
    }
})

module.exports = mongoose.model('User', usersSchema)