const mongoose = require('mongoose')

const quoteSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
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