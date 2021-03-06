const mongoose = require('mongoose')

const toDoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,

    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
})

module.exports = mongoose.model('ToDo', toDoSchema)