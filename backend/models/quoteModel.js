const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    quote:{
        type: String,
        required: [true, 'Please add Quote']
    },
    author:{
        type: String,
        required: [true, 'Please add Author']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Quote', quoteSchema)