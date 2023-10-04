const asyncHandler = require('express-async-handler')
const Quote = require('../models/quoteModel')
const User = require('../models/userModel')
const getQuotes = asyncHandler(async (req,res) => {
    const quotes = await Quote.find()

    res.status(200).json(quotes)
})

const createQuotes = asyncHandler(async (req,res) => {
    if(!req.body.quote || !req.body.author){
        res.status(400)
        throw new Error('Please add all fields')
    }
    const quote = await Quote.create({
        author: req.body.author,
        quote: req.body.quote,
        user: req.user.id
    })
    res.status(200).json(quote)
})

const updateQuotes = asyncHandler(async(req,res) => {
    const quote = await Quote.findById(req.params.id)
    const user = await User.findById(req.user.id)

    if(!quote){
        res.status(400)
        throw new Error('Quote not found')
    }
    // Check for user
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // make sur the logged in user matches the quotes user
    if(quote.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })
    res.status(200).json(updatedQuote)
})

const deleteQuotes = asyncHandler(async (req,res) => {
    const quote = await Quote.findById(req.params.id)
    const user = await User.findById(req.user.id)

    if(!quote){
        res.status(400)
        throw new Error('Quote not found')
    }

    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    if(quote.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }
    await quote.deleteOne()
    res.status(200).json({_id: req.params.id})
})

module.exports = {
    getQuotes,
    createQuotes,
    updateQuotes,
    deleteQuotes
}