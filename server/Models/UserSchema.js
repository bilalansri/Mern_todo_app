let mongoose = require('mongoose')

let userschema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('Users', userschema)